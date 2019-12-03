/**
 * Notification services
 */

'use strict'
const nodemailer = require("nodemailer")

/**
 * @param null
 */
async function emailWhenMongoGoesDown() {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: 'kevinnzaworski@gmail.com',
                pass: 'StWmca1992'
            }
        })
        
        let dateObj = new Date()
        let date = dateObj.toLocaleDateString()
        let time = dateObj.toLocaleTimeString();

        let message = "The mongodb server could not connect on: " + date + " at " + time
        
        let info = await transporter.sendMail({
            from: '"Fred Foo 👻" <no-reply@kevinzaworski.com>', // sender address
            to: 'freda91@ethereal.email', // list of receivers
            subject: "System Error", // Subject line
            text: message, // plain text body
            html: "<b>" + message + "</b>" // html body
        }) 
}

module.exports = {
    emailWhenMongoGoesDown
}



