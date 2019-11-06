import * as Yup from 'yup';
import { addMonths, startOfDay, parseISO} from 'date-fns';


import Enrollment from '../models/Enrollment';
import Plan from '../models/Plan';
import Student from '../models/Student';

import EnrollmentMail from '../jobs/EnrollmentMail';
import Queue from '../../lib/Queue';

class EnrollmentController {
  async index(req, res) {
    const enrollment = await Enrollment.findAll({
      order: [['createdAt', 'DESC']],
    });
    return res.json(enrollment);
  }
  
  async store(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number().required(),
      plan_id: Yup.number().required(),
      start_date: Yup.date().required(),
    });


    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { student_id, plan_id, start_date, } = req.body;

    
    /**
     * Validation to verify student and plan
     */
    const plan = await Plan.findByPk(plan_id);

    if (!plan) {
      return res.status(400).json({ error: 'Plan not exist' });
    }

    const student = await Student.findByPk(student_id);

    if (!student) {
      return res.status(400).json({ error: 'Student not exist' });
    }
    
    /**
     * Converting date type and implements calculus to end date and price
     */
    const dateStart = startOfDay(parseISO(start_date));

    const end_date = addMonths(dateStart, plan.duration);
    const price = (plan.duration * plan.price);

    /**
     * Create on database with new informations
     */

    const enrollmentInfo = await Enrollment.create({ 
      student_id, 
      plan_id, 
      start_date: dateStart, 
      end_date, 
      price
      });

    /**
     * Email send configuration after create enrollment
     */
    const enrollment = await Enrollment.findByPk(student_id, {
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['name', 'email'],
        },
        {
          model: Plan,
          as: 'plan',
          attributes: ['title', 'duration', 'price']
        },
      ],
    });
    
    /**
     * import Queue method to call key function presente in EnrollmentMail object
     * Send Email after confirm enrollment.
     */
    await Queue.add(EnrollmentMail.key, {
      enrollment,
      enrollmentInfo,
    });


    return res.json({ enrollmentInfo });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number().required(),
      plan_id: Yup.number().required(),
      start_date: Yup.date().required(),
    });

    const enrollmentId = await Enrollment.findByPk(req.params.id);

    if(!enrollmentId) {
      return res.status(400).json({ error: 'Enrollment does not exists' });
    }


    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { student_id, plan_id, start_date, } = req.body;

    
    /**
     * Validation to verify student and plan
     */
    const plan = await Plan.findByPk(plan_id);

    if (!plan) {
      return res.status(400).json({ error: 'Plan not exist' });
    }

    const student = await Student.findByPk(student_id);

    if (!student) {
      return res.status(400).json({ error: 'Student not exist' });
    }
    
    // Converting dateformat
    const dateStart = startOfDay(parseISO(start_date));

    const end_date = addMonths(dateStart, plan.duration);
    const price = (plan.duration * plan.price);

    const enrollment = await enrollmentId.update({ 
      student_id, 
      plan_id, 
      start_date: dateStart, 
      end_date, 
      price
      });

    return res.json({ enrollment });
  }

  async delete(req, res) {
    const enrollment = await Enrollment.findByPk(req.params.id);
    
    /**
     * Check with enrollment exists
     */
    if (!enrollment) {
      return res.status(400).json({ error: 'Enrollment not exists '});
    }

    await enrollment.destroy({ where: { id: enrollment.id } });

    return res.json(enrollment);


  }


}

export default new EnrollmentController();