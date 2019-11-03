import * as Yup from 'yup';
import Plan from '../models/Plan';

class PlanController {
  async index(req, res) {
    // Listando os planos (sintax sequelize)
    const plans = await Plan.findAll({
      order: [['createdAt', 'DESC']],
    });
    return res.json(plans);
  }
  
  async store(req, res) {
    const schema =  Yup.object().shape({
      title:Yup.string().required(),
      duration:Yup.number().required(),
      price:Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails'});
    }

    const plansExists = await Plan.findOne({
      where: { title: req.body.title },
    });

    if (plansExists) {
      return res.status(400).json({ error: 'Plan already exists' });
    }

    const { id, title, duration, price } = await Plan.create(req.body);

    return res.json({
        id,
        title,
        duration,
        price,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      duration: Yup.number(),
      price: Yup.number(),
    });

    if(!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails'});
    }

    const { id } = req.params.id;

    const plan = await Plan.findByPk(req.params.id);

    const { title, duration, price} = await plan.update(req.body);


    return res.json({
      id,
      title,
      duration,
      price,
    });
  }

  async delete(req, res) {
    const plan = await Plan.findByPk(req.params.id);

    await plan.destroy({ where: {id: plan.id } });

    return res.json(plan);
  }
}

export default new PlanController();
