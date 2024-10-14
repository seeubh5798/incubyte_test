
import { add } from './add.js';


const inputTag = document.getElementById("input");
const button = document.getElementById("calculateBtn");
const resultdiv = document.getElementById("result");
let result;

button.addEventListener("click", ()=>{
    let error = false;
    try{
        result= add(inputTag.value);
        // resultdiv.style.color = 'green';
        resultdiv.className = 'result success show';
    }
    catch(err){
        error =true;
        result = err.message;
        resultdiv.className = 'result error show';
    }
    finally{
        console.log(result);
        resultdiv.innerHTML = error==false ? `Sum is : ${result}` : `Error is : ${result}`;
        resultdiv.classList.remove('fade-in');
        void resultdiv.offsetWidth; 
        resultdiv.classList.add('fade-in');
    
    }
    
   
})



