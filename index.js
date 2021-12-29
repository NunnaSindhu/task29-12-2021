let obj=[{id:101,
    firstName:"Ram",
    lastname:"nunna",
    email:"ram@gmail.com",
    age:25,profession:"softwaredeveloper",city:"Hyderabad",contactnum:25432763485},
{id:201,firstName:"Priya",lastname:"chilu",email:"priya@gmail.com",age:35,profession:"Housewife",city:"Khammam",contactnum:45348756},
{id:301,firstName:"raj",lastname:"rega",email:"raj@gmail.com",age:45,profession:"doctor",city:"Mumbai",contactnum:34573465},
{id:401,firstName:"Hema",lastname:"nunna",email:"hema@gmail.com",age:26,profession:"senior softwaredeveloper",city:"hyderabad",contactnum:3452376},
{id:501,firstName:"John",lastname:"perambu",email:"john@yahoo.com",age:35,profession:"Architect",city:"chennai",contactnum:6353746},
{id:601,firstName:"shyam",lastname:"bala",email:"bala@yahoo.com",age:30,profession:"civil engineer",city:"bangalore",contactnum:465347},
{id:701,firstName:"Rani",lastname:"java",email:"abc@gmail.com",age:23,profession:"fullstack developer",city:"Hyderabad",contactnum:63452},
{id:801,firstName:"Giri",lastname:"gajula",email:"xyz@gmail.com",age:26,profession:"farmer",city:"Mumbai",contactnum:453475634},
{id:901,firstName:"Mani",lastname:"java",email:"mani@gmail.com",age:28,profession:"software developer",city:"chennai",contactnum:3475543},
{id:909,firstName:"Bindu",lastname:"gajula",email:"gajula@gmail.com",age:24,profession:"softwaredeveloper",city:"Hyderabad",contactnum:4365734}
]
for(let i=0;i<obj.length;i++)
{
    console.log(obj[i].id);
}
for(let key of obj){
    console.log(key.city);
}
for(let j in obj){
    console.log(obj[j].firstName);
}
obj.forEach(element => {
    console.log(element.profession);
    
});
