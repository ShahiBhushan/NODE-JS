const {hashPw,comparePw}=require("./compare.js");
const hashePw=hashPw("password");
const result=comparePw("password",hashePw);
console.log({result});