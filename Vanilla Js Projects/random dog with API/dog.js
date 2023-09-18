//http://dog.ceo/api/breed/image/random
//.then -Promises
//asynchronous programming 
 
console.log("hello world");

//let dogImg= document.getElementById('dogImage')


const getNewDog=()=>{
  
    fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(json => {
    const dogImg= document.getElementById('dogImage')
    console.log(json.message);
    console.log(json);
   dogImg.innerHTML=`<img src='${json.message}'height=300 width=300>`
  })
}
const dogBtn=document.getElementById('dogBtn')
 dogBtn.addEventListener('click',getNewDog)