import Plan from '../models/Plan';

class PlanController {
  async store(req, res) {
    const { title, duration, price } = req.body;

    const plan = await Plan.findOne({ where: { title } });

    const { id } = plan;

    return res.json({
      plan: {
        id,
        title,
        duration,
        price,
      },
    });
  }
}

export default new PlanController();
