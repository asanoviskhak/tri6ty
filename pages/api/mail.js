
const mail = require('@sendgrid/mail');
export default function handler(req, res) {
  mail.setApiKey(process.env.SENDGRID_API_KEY);
  const body = JSON.parse(req.body);
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  mail.send({
    to: 'tre6tyinc@gmail.com',
    from: 'tri6ty.web@gmail.com',
    subject: 'New message from website!',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  }).then(() => {
    res.status(200).json({ status: 'Ok' });
  }).catch(error=>console.log(error));
}

