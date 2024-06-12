// // ES-6
// var x=15;
// console.log(x);
// {
//     // let x=5; //to declare the var with the block scope
//     const x=6;
//     console.log(x);
//     // x=6 //cannot change value of a const value
//     // console.log(x);
    
// }

// var x=function(x,y){
//     return x+y;
// };
 
// const x= (x,y) => x+y;
// console.log(x(5,6));

// spread operator
// const q1=['jan','feb','march']
// const q2=['april','may','june']
// const q3=['july','august','september']
// const q4=['october','nov,','dec']
// const year=[...q1, ...q2,...q3,...q4]

// console.log(year)

// const mynum=[21,12,34,43,56,65];
// let max= Math.max(...mynum);
// console.log(max);

// const mynum=[21,12,34,43,56,65];
// let sum=0;
// for(let num of mynum){
//     sum=sum+num;
// }
// console.log(sum)

// const name="Tanuja";
// let text="";
// for(let ch of name){
//     text=ch+text;
//     text=text+ch+"";
// }
// console.log(text)

// const fruits=new Map([
//     ["apple",500],
//     ["bananas",200],
//     ["oranges",400],
// ]);
// console.log(fruits);
// console.log(fruits.get("oranges"));


// const letters=new Set();
// letters.add("a");
// letters.add("b");
// letters.add("c");
// letters.add("d");
// letters.add("a");
// letters.add("b");
// console.log(letters);

// class Car{
//     constructor(name,mfgyear){
//         this.name=name;
//         this.mfgyear=mfgyear;
//     }
// }

// const mycar1=  new Car("Mercedes",2024);
// const mycar2=  new Car("Porsche",2023);
// console.log(mycar1,mycar2);



// const myfunction=() =>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("This is inside promise");
//         resolve();
//     },2000);
// });
// };

// myfunction()
// .then(()=>{
//     console.log("Resolved");
// })
// .catch(()=>{
//     console.error("Rejected");
// });

// const person={
//     firstname: "Tanuja",
//     lastname: "Chaudhary",
//     age:21,
//     eyecolor:"brown",
// };
// let id= Symbol("id");
// person[id]=12219564;
// console.log(person);

// const add2num= (a,b=10)=>a+b;
// console.log(add2num(2));
// const addnum= (...args)=>{
//     console.log(args);
// };
// console.log(addnum(10,12,13,14,15));

// const addnum= (...args)=>{
//     let sum=0;
//     for(let num of args){
//         sum=sum+num
//     }
//     return sum;
// };
// console.log(addnum(10,12,13,14,15));

