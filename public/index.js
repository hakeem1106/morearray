const segment = document.getElementById('root');
const form = document.createElement("form");
const userEmail = document.createElement("input");
const userName = document.createElement("input");
const userPhone = document.createElement("input");
      
segment.appendChild(form).setAttribute("method", 'POST')    
    
form.appendChild(userEmail);
form.appendChild(userName);
form.appendChild(userPhone);


userEmail.setAttribute("placeholder", "E-Mail");
userName.setAttribute("placeholder", "Name");
userPhone.setAttribute("placeholder", "Phone");


      