const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let body = document.querySelector('body');
let index1 = 0;

/*function init(e) {
  body.addEventListener('keydown', function(){
    const key = parseInt(e.detail || e.which);
    
    if(key === code[index]){
     index++;
    
      if (index === code.length) {
         alert('Congratulations!!!');
         
         index = 0;
      }
    } else {
      index = 0;
    }
    
  })
}

init(e);

body.addEventListener('keydown', function init(e) {
   const key = parseInt(e.detail || e.which);
    
    if(key === code[index]){
     index++;
    
      if (index === code.length) {
         alert('Congratulations!!!');
         
         index = 0;
      }
    } else {
      index = 0;
    }
    
  })
}*/

const alphabet = [65, 66, 67];
 
// Keep track of index outside of the event handler.
let index = 0;
 
// This is the function that would be invoked by the event listener.
