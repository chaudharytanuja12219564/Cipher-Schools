// Object Oriented Programmming


//--OBJECT LITERAL--//
// let person= {
//     firstname:"Tanuja",
//     lastname:"Chaudhary",

// //--WE ARE USING THE ` sign that is backtick sign--//    
//     getFullname: function(){
//         return `The name of the person is: ${person.firstname} ${person.lastname}`;
//     },

//     phoneNumber:{

//         mobile:"1234567890",
//         landline:"123456",
//     },
// };

// console.log(person.getFullname());
// console.log(person.phoneNumber.mobile);


//--OBJECT CONSTRUCTOR--//
// function person(firstname,lastname){
//     this.firstname=firstname;
//     this.lastname=lastname;
// }

// let person1= new person("Tanuja ", "Chaudhary");
// let person2= new person("Deepanshu", "Jangid");

// console.log(person1.firstname+person1.lastname);
// console.log(`${person2.firstname} ${person2.lastname}`);


//--OBJECT.CREATE()--//

// const coder= {
//     isStudying : false,
//     printIntro: function(){
//         console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
//     },
// };

// const me= Object.create(coder);
// me.name= "Tanuja Chaudhary";
// me.isStudying="True";
// me.printIntro();


// //--CLASS METHOD--//
// class Vehicle{
//     constructor(name,maker,engine){
//         this.name=name;
//         this.maker=maker;
//         this.engine=engine;
//     } 

//     getdetails(){
//         return `The name of the vehicle is: ${this.name} ${this.maker} ${this.engine}`;
//     }
// }

// let v1= new Vehicle("Fronz","Nexa","2500cc");
// let v2= new Vehicle("Creata","Hyundai","2000cc");

// console.log(v1.name);
// console.log(v1.maker);
// console.log(v1.engine);

// console.log(v2.getdetails());

//--DATA HIDING--//
//--ABSTRACTION--//

// class person{
//     constructor(name,id){
//       this.name=name;
//       this.id=id;  
//     }

//     Addaddress(newaddress){
//         this.address=newaddress;
//     }

//     getDetails(){
//         console.log(`Name is: ${this.name} and The address is: ${this.address}`);

//     }
// }
// let person1= new person("Tanuja","12219564");
// person1.Addaddress("Mathura");

// person1.getDetails();


// class person{
//     constructor(firstname,lastname){
//       this.firstname=firstname;
//       this.lastname=lastname;  
    

//     let getdetails_noaccess= function(){
//         return `First name is: ${this.firstname} and The last name is: ${htis.lastname}`
//     };

//     this.getDetails_access=function(){
//          return `First name is: ${this.firstname} and The last name is: ${htis.lastname}`
//     };
//     }
// }
// let person1= new person("Tanuja","Chaudhary");
// console.log(person1.firstname);

// //SINCE THE SCOPE OF THIS FUNCTION IS INSIDE THE CONSTRUCTOR THEN IT IS UNACCESSIBLE
// console.log(person1.getdetails_noaccess());
// console.log(person1.getdetails_access());


//--INHERITANCE--//
class person{
    constructor(firstname,lastname,rollnumber){
      this.firstname=firstname;
      this.lastname=lastname;  
      this.rollnumber=rollnumber;
    }
 getdetails (){
    return `First name is: ${this.firstname} and The last name is: ${this.lastname}`;

}
}

class students extends person{
    constructor(firstname,lastname,rollnumber){
        super(firstname,lastname,rollnumber);
    }

    getdetails() {
        return `First name is: ${this.firstname} and The last name is: ${this.lastname} and the roll number is: ${this.rollnumber}`;
    }
}

let person1= new person("Tanuja","Chaudhary");
console.log(person1.getdetails());

let person2= new students("Deepy","Jangid","12222828");
console.log(person2.getdetails());