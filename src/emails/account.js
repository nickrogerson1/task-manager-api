const sgMail = require("@sendgrid/mail")

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "nickrogerson11@gmail.com",
        subject: "Thanks for signing up!",
        text: `Welcome to the app, ${name}. Let us know how you get on.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "nickrogerson11@gmail.com",
        subject: "Sorry to see you go!",
        text: `See you later, ${name}. Look forward to seeing you back soon.`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}