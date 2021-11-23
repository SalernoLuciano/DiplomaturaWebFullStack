var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/novedades', async function(req, res, next) {
  let novedades = await novedadesModel.getNovedades();

  novedades = novedades.map(novedades => {
    if(novedades.img_id){
        const imagen = cloudinary.url(novedades.img_id, {
            width: 960,
            height: 200,
            crop: 'fill'
        });
        return {
            ...novedades,
            imagen
        }
    }else{
        return {
            ...novedades,
            imagen: ''
        }
    }
  });
  res.json(novedades);
});

router.post('/contacto', async (req, res) =>{
    const mail ={
        to: 'lsalerno@fi.uba.ar',
        subject: 'Contacto Web',
        html: `<b>${req.body.coordinador}</b> se contacto a traves de la web y quiere mas informacion a este correo: <b>${req.body.email}</b> <br>Ademas, hizo el siguiente comentario: ${req.body.comentario}.<br>Su interno es:<b>${req.body.interno}</b><br>El nombre del evento es ${req.body.nombreEvento} el dia ${req.body.fecha} a las ${req.body.hora} en el aula ${req.body.aula}.`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth:{
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
    await transport.sendMail(mail)
    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
});

module.exports = router;