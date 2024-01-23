const bcrypt = require("bcryptjs");

//method 1
const oldHashMethod = (string) => {
  bcrypt.hash(string, 10, (err, result) => {
    if (err) console.log({ err });
    console.log({ result });
  });
};
oldHashMethod("bhushan");
//method-2
const newHashPassword = async (str) => {
  const newres = await bcrypt.hash(str, 10);
  return newres;
};
const extracValue = async () => {
  const newRes = await newHashPassword("shahi");
  console.log({newRes});
};
extracValue();
//method-3
const hashPw = (string) => {
  return bcrypt.hashSync(string, 10);
};
console.log({ res: hashPw("laxman") });
