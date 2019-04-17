const segment = document.getElementById('root');
const userEmail = document.createElement("input");
const userName = document.createElement("input");
const userPhone = document.createElement("input");
      
    
    
segment.appendChild(userEmail).setAttribute("method","POST");
segment.appendChild(userName).setAttribute("method","POST");
segment.appendChild(userPhone).setAttribute("method","POST");


userEmail.setAttribute("placeholder", "E-Mail");
userName.setAttribute("placeholder", "Name");
userPhone.setAttribute("placeholder", "Phone");


      