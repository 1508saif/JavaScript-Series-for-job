// DOM === Documnet Object Module 

// Dom is a life of JavaScript for frontend

// 4 Pillar of JavaScript 1{ 1: Selection of Element; 2// Changing HTML .3// Change in CSS. 4// Event listener }

// selection of Element isse humlog koi bhi html tag , element , attribute tag kuchh bhi select kar saktey hai aur usko JavaScript se handle kar sakte hai 

  const hello = document.querySelector('h3');

//   Note : agar class hai to .use karenge aur "id" hai to # aur agar koi element tag hai to us element ka naam likhenge same jaise css me element ko select kartey waise hi ekdum.

  console.log(hello);

//  Change in HTML agar kuchh bhi HTML me change karna hai JavaScript ke throught to hum (htmltag.innerHTML use karke change kar saktey hai);
 
//  example: h1.innerHTML;
// const changeHTML = document.querySelector("h2");
// changeHTML.innerHTML= "Hello everyone today is day2 of my JavaScript Journey for job series";

// Agar humein JavaScript se CSS ko change karna hai to hum use karenge "QuerySelector.style.property" ="yaha pe color likho // text likho koi bhi property do yaha pe";
const changeCss =document.querySelector('h1');
changeCss.style.backgroundColor ="yellow";
changeCss.style.color  = "black";

// addEventListener in JavaScript ismein hum do kaam kartey hai 1st is kaunsa Event(click ,mousemove, keyboard , dblclick etc) ko trigger karna  chahte ho , aur dusra us event ke trigger hone pe aap chahte ho kya ho example colour change , text change , display .
changeCss.addEventListener("mousemove" ,function(){
    changeCss.style.color = "red";
    changeCss.style.backgroundColor ="blue";
    
}) ;


const secondChance = document.querySelector("h5");
secondChance.addEventListener("click",function(){
secondChance.style.color = "skyblue";
secondChance.innerHTML = "ofcourse why not";
secondChance.style.fontSize = "44px";
});

// Callback function {Callback Function ek aisa function hota hai jo dusre function ko argument ke roop me pass kiya jata hai , aur baad me call hota hai} #note Function ke andar function pass karna = Callback Function.

function greet(name){
  console.log("hello" , name);
}
  function processUser(callback){
    callback("saif");
  }
  processUser(greet);

// result check 
function display(result){
    console.log(result);
}
function showResult(a , b ,calculate){
   let sum = a + b;
   calculate(sum);
}
showResult(a , b, display)