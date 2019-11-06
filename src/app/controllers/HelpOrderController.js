import * as Yup from 'yup';
import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

import HelpOrderMail from '../jobs/HelpOrderMail';
import Queue from '../../lib/Queue';


class HelpOrderController {
  async index(req, res) {
    const student_id = req.params.id;
    const student = await Student.findByPk(student_id);

    /**
     * Questions no answers for one user
     */

    if(student) {
      const questionNoAnswer = await HelpOrder.findAll({ 
        where: { student_id, answer: null },
        order: [['createdAt', 'DESC']],
      });

      return res.json(questionNoAnswer);
    }else {
      /**
       * Questions no answers for all users 
       */
      const questionNoAnswer = await HelpOrder.findAll({ 
        where: { answer: null },
        order: [['createdAt', 'DESC']],
      });
      return res.json(questionNoAnswer);
    }

    
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      question: Yup.string().required(),
    });

    if(!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    /**
    * Create HelpOrder
    */
    const student_id = req.params.id;
    const student = await Student.findByPk(student_id);

    /**
    * Check if student exists
    */
    if (!student) {
      return res.status(400).json({ error: 'Student not exists'});
    }
    
    const { question } = req.body

    const helpOrder = await HelpOrder.create({ student_id, question });
    return res.json(helpOrder);

  }

  async update(req, res) {
    
    const schema = Yup.object().shape({
      answer: Yup.string().required(),
    });
    
    const helpOrder_id = req.params.id;
    const helpOrder = await HelpOrder.findByPk(helpOrder_id, {
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['name', 'email'],
        },
      ],
    });


    /**
     * Check if body have answer
     */

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Insert one answer please' });
    }

   
    if (helpOrder) {
      const questionNoAnswer = await HelpOrder.findAll({ 
        where: {
          answer: null 
        },
      });
      
      if (questionNoAnswer) {
        const { answer }  = req.body;
        const answer_at = new Date();

        const gymAnswer = await helpOrder.update({
          answer,
          answer_at
        });

        /**
         * Send Email after confirm answer
         */
        await Queue.add(HelpOrderMail.key, {
          helpOrder,
        });
        

        return res.json(gymAnswer);
      } else {
        return res.json({ message: 'Pergunta já possui uma resposta' });  
      }
    } else {
      return res.status(400).json({ error: 'Not have any order to respond' });
    }


  }

}

export default new HelpOrderController();