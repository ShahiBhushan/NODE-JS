const bcrypt=require("bcryptjs");
const hashPw = (string) => {
    return bcrypt.hashSync(string, 10);
  };
  const comparePw=(string,hash)=>{
    return bcrypt.compareSync(string,hash);
  };
  module.exports ={hashPw,comparePw};