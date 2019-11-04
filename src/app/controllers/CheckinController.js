import Checkin from '../models/Checkin';
import Student from '../models/Student';

import { startOfWeek, endOfWeek, startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';

class CheckinController {
  async index(req, res) {
    const student_id = req.params.id;

    const student = await Student.findByPk(student_id);

    if (!student) {
      return res.status(400).json({ error: 'Student does not exists' });
    }

    const studentCheckins = await Checkin.findAll({
      where: { student_id },
      order: [['createdAt', 'DESC']],
      attributes: ['student_id', 'created_at'],
    });

    // Check if student have realized checkins
    if (studentCheckins == 0) { 
      return res.status(400).json({ error: 'Student dont have any checkins' });
    }

    return res.json(studentCheckins);
  }

  async store(req, res) {
    const student_id = req.params.id;
    const student = await Student.findByPk(student_id);

    if(!student) {
      return res.status(400).json({ error: 'Student does not exists' });
    }

    /**
     * Save actual system Date
     */
    const actualDate = new Date();


    /**
     * Check limit of checkins in week
     */
    const checkinsWeek = await Checkin.findAll({
      where: {
        student_id,
        created_at: {
          [Op.between]: [startOfWeek(actualDate), endOfWeek(actualDate)],
        },
      },
    });

    if(!(checkinsWeek.length < 5)) {
      return res.status(400).json({ error: 'Your checkins limit for this week as arrive' });
    }

    /**
     * Check limit of checkins in day
     */

     const checkinsDay = await Checkin.findAll({
       where: {
         student_id,
         created_at: {
           [Op.between]: [startOfDay(actualDate),endOfDay(actualDate)],
         },
       },
     });

     if (!(checkinsDay == 0)) {
       return res.status(400).json({ error: 'You arrive total checkins in day'});
     }


    
    /**
     * Case don't have reached on limite, create a new checkin
     */
    await Checkin.create({ student_id });

    return res.json({ message: 'Checkin realized with sucessful'});
    
  }
}

export default new CheckinController();