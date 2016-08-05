var nodemailer = require('nodemailer');



// send mail with defined transport object
module.exports.sendemail = function(name, toaddr, link){

        // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport('smtps://sivascse%40gmail.com:banumathy27@smtp.gmail.com');


        // setup e-mail data with unicode symbols
    var mailOptions = {
        from: '"Online Quiz " <info@nsqat.com>', // sender address
        to: toaddr, // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world 🐴', // plaintext body
        html: `<b>Hello `+name+`</b>
                <br>=================<br>
                Please create Password for OnlineQuiz <a href="`+link+`">HERE</a>
                <p>` // html body
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
}; 