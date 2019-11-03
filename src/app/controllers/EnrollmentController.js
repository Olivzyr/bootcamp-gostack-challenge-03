
import Enrollment from '../models/Enrollment';

class EnrollmentController {
  async store(req, res) {
    const { start_date } = new Date();
    const { end_date } = await Enrollment.create(req.body);
    
    return res.json({
      start_date,
      end_date,
    });
  }

}

export default new EnrollmentController();