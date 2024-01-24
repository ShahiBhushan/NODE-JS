// const {hashPw,comparePw}=require("./bcryptLi.js");
// const hashePw=hashPw("password");
// const result=comparePw("password",hashePw);
// console.log({result});
require('dotenv').config();
const mailer=require("./nodemailer");
console.log(process.env);
// const mailFn=async(message)=>{
// const result=await mailer.sendMail(message);
// console.log(result);
// };
const message={ from:'"hello bhushan" <bhushanshahi2056@gmail.com>',
to:"bhushanshahi42@gmail.com",
subject:"I am angry",
html:"<h1> ok sir</h1>",//(use for img)Embedded image: <img src='cid:unique@nodemailer.com'/>",

attachments:[
    { // utf-8 string as an attachment
        filename: 'text1.txt',
        content: 'hello world!'},
        //send direct to give path
        //(use for pdf)
        // { 
        //     path: './eco.pdf',
        // },
        // (use for image)
        // {
        //     filename: 'image.jpg',
        //     path: './photo.jpg',
        //     cid: 'unique@nodemailer.com' //same cid value as in the html img src
        // }
],
};
const mailFn=async(message)=>{
    const result=await mailer.sendMail(message);
    console.log(result)
};
mailFn(message);