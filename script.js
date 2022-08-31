const emailInput = document.getElementById('email');

emailInput.onblur = testEmailInput;

function testEmailInput(){
   if(emailInput.checkValidity()) return; 
   console.log("bad")
}