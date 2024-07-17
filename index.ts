//index signatures ko hum tub use krte hen jub hum ko nhi pata ho k property kitni aane wali ho or property jo hen us ke naam kia hen
//index signature are used to defined the properties of an objects
//index signature are used to defined the properties of an array
// here prop is the name of the index signature and string in side the square bracits is specipy the type of the prop and any specifies the type of the value associated with that key.  

// let obj:{name:string,age:number,[prop:string]:any
// } = {
//     name:"sana",
//     age:36,
    
// }
// obj.student = true;
// obj.address = "karachi";
// obj.rollNumber = 102;


// console.log(obj);
// another example of index signature
// interface StringIndex {
//     [key: string]: any;
//   }
  
//   const obj: StringIndex = {
//     name:"sumaira",
//     age:37,
//     address:"pakistan"
    

//   };
//   console.log(obj);
  
  
//   console.log(obj["name"]); 
//   console.log(obj['age']); 
//   console.log(obj['address']); 
// interface JSONObject {
//     [key: string]: string | number | boolean;
//   }
  
//   const jsonData: JSONObject = {
//     name: 'John',
//     age: 30,
//     isAdmin: true,
//     // ... other JSON properties ...
//   };
//   isStudent:true;
//   console.log(jsonData);
//   console.log(jsonData["name"]);
//   console.log(jsonData.age);
  
  
  