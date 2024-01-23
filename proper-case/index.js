const puc=require('proper-upper-case');
const convertString=(string)=>{
     return puc(string);
};
const result=convertString("bhushan shahi is student");
console.log(result);
//steps
//1.npm library (spmjs.com)
// 2.library=> proper-upper-case
// 3.npm i proper-upper-case
// 4.we will get node-module,package.json,package-Lock.json
// 5.import the package in the Code(require)
//6.use the package and done.