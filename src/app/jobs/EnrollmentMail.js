import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class EnrollmentMail {
  get key() {
    return 'EnrollmentMail';
  }

  /**
   * Function called to send email in queue
   */
  async handle({ data }) {
    const { enrollment, enrollmentInfo } = data;

    await Mail.sendMail({
      to: `${enrollment.student.name} <${enrollment.student.email}>`,
      subject: 'Matricula Criada',
      template: 'enrollment', 
      context: {
        provider: enrollment.student.name,
        plan: enrollment.plan.title,
        date: format(parseISO(enrollmentInfo.start_date), "'dia' dd 'de' MMMM'", {
          locale: pt,
        }),
        planExpiration: format(parseISO(enrollmentInfo.end_date), "'dia' dd 'de' MMMM'", {
          locale: pt,
        }),
        price: enrollmentInfo.price,
      },
    });
  }
}

export default new EnrollmentMail();