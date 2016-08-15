var nodemailer = require('nodemailer');
var email   = require("emailjs");



// send mail with defined transport object
module.exports.sendemail = function(name, toaddr, link){

console.log('came into send email method:');
        // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport('smtps://onlinequizqatar%40gmail.com:telpqatar@smtp.gmail.com');



        // setup e-mail data with unicode symbols
    var mailOptions = {
        from: '"Online Quiz " <info@nsqat.com>', // sender address
        to: toaddr, // list of receivers
        subject: 'Online Quiz Registration....', // Subject line
        text: 'Hello :-)', // plaintext body
        html: `<b>Hello `+name+`</b>
                <br>=================<br>
                Please create Password for OnlineQuiz <a href="`+link+`">HERE</a>
                <p>` // html body
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log('Email ------------- '+error);
        }
        console.log('Message sent: ' + info.response);
    });
}; 

