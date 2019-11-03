import * as Yup from 'yup';
import Student from '../models/Student';

class StudentController {
  // Cadastro de estudante
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      birth_date: Yup.date()
        .required(),
      wheight: Yup.number().required(),
      height: Yup.number().required(),  
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    
    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) {
      return res.status(400).json({ error: 'Student already exists. ' });
    }

    const { id, name, email, age, wheight, height } = await Student.create(
      req.body
    );

    return res.json({
      id,
      name,
      email,
      age,
      wheight,
      height,
    });
  }

  // Update Estudante
  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      birth_date: Yup.date(),
      wheight: Yup.number(),
      height: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email } = req.body;

    // Encontra o usuário desejado pelo email para edição das informações
    const student = await Student.findOne({ where: { email } });

    if (email !== student.email) {
      const studentExists = await Student.findOne({ where: { email } });

      if (studentExists) {
        return res.status(400).json({ error: 'Student already exists.' });
      }
    }

    const { id, name, age, wheight, height } = await student.update(req.body);

    return res.json({
      id,
      name,
      email,
      age,
      wheight,
      height,
    });
  }
}

export default new StudentController();
