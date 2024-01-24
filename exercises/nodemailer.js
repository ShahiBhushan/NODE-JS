//go to nodemailer.com
//npm i nodemailer
//find the email sending code
//smpt milaun paro
//usen name and password
//run the code

const nodemailer=require("nodemailer");
// create transporter
const transport=nodemailer.createTransport({ 
 host: "smtp.gmail.com",
port: 465,
secure: true,
auth: {
  // TODO: replace `user` and `pass` values from <https://forwardemail.net>
  user: process.env.USERNAME,
  pass: process.env.PASSWORD,
},
});
const sendMail=async({from,to,subject,html,attachments})=>{
    //setup message
    const message={
        from,  // sender address
        to, // list of receivers
        subject,// Subject line
       // text: // plain text body
        html ,// html body
        attachments:[...attachments], 
          
    };
    //send emmail using sendMail fn
   const result= await transport.sendMail(message);
   return result.messageId
};
module.exports={sendMail};