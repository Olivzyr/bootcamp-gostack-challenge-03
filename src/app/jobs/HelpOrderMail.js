import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class HelpOrderMail {
  get key() {
    return 'HelpOrderMail';
  }

  async handle({ data }) {
    const { helpOrder } = data;

    await Mail.sendMail({
      to: `${helpOrder.student.name} <${helpOrder.student.email}>`,
      subject: 'Solicitação de resposta atendida',
      template: 'helpOrder',
      context: {
        provider: helpOrder.student.name,
        question: helpOrder.question,
        answer: helpOrder.answer,
        answerDate: format(parseISO(helpOrder.answer_at), "'dia' dd 'de' MMMM', às' H:mm'h'", {
          locale: pt,
        }),
      }
    });
  }

}

export default new HelpOrderMail();