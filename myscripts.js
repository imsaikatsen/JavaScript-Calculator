function calculate(x){

    form.display.value = form.display.value + x;
    
}



document.addEventListener('keydown', keyPressHandler);

function keyPressHandler(e) {
    console.log(e);
    var num = ["1","2","3","4","5","6","7","8","9","0","+","-","*","/",".","Enter"];

    if(!num.includes(e.key)) {
        return;
    }

    console.log(e.key);
   
    if(e.key == 'Enter'){
        document.querySelector('body > div > div > form > div.calculator__keys > button.key--equal').click();
    } else{
        form.display.value +=  e.key;
    }
}



function validate(e){  
    var num = form.display.value; 
    if (isNaN(num)){  
      return false;  
    }else{  
      return true;  
      }  
}

// function disable(e)
// {
//  document.onkeypress = function (e) 
//  {
//     // console.log(e);
//      var name = [1,2,3,4].includes(e.key);

//      console.log(name);

//      if(name){
//          return true;
//      }else{
//         return false;
//      }
  
//  }
// }


// function validate() { 
    
//     var n = form.display.value; 

//     if (isNaN(n)) {  
//         return false; 
//     } else { 
//         return true; 
//     } 
// } 
















