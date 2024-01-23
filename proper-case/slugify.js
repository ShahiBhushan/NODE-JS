 //1.write a js function to convert title to slug Eg:"React Js Clean Guide"=>react-js-clean-guide.
 const slugger=(string)=>{
    return string.toLowerCase().replaceAll(" ","-");
 };
 const result=slugger("React Js Clean Code Guide");
 console.log(result);
  //2.use npm package to find the slug converter

const slugify=require('slugify');
const sluggers=(string)=>{
    return slugify(string,{lower:true});
 };
 const res=slugger("React Js Clean Code Guide");
 console.log(res);
