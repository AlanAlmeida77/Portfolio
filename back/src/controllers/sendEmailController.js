const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
  try {
    const { name, email, content } = req.body;

    if (!name || !email || !content) {
      console.log('Invalid Request Body');
      return res.status(400).json({ error: 'Invalid request body. Make sure all required fields are provided.' });
    }

    console.log('Request Body:', req.body); // Agregado para verificar el cuerpo de la solicitud

    // Configurar el transporte de nodemailer con tus credenciales de correo
    const transporter = nodemailer.createTransport({
      service: 'hotmail', // Usar 'hotmail' en lugar de 'Outlook'
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    console.log('Transporter created'); // Agregado para verificar la creación del transporter

    // Configurar los detalles del correo electrónico
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Cambiar al correo al que deseas enviar los mensajes
      subject: 'Mensajes del formulario de contacto',
      text: `
        Mensajes recibidos:

        Nombre: ${name}
        Email: ${email}
        Mensaje: ${content}
      `,
    };

    console.log('Mail options created'); // Agregado para verificar la creación de mailOptions

    // Enviar el correo electrónico
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent:', info);

    // Respondemos al cliente
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending message:', error.message);
    res.status(500).json({ success: false, error: 'Internal Server Error', details: error.message });
  }
};

module.exports = {
  sendEmail,
};
