const segment = document.getElementById('root'),
      form = document.createElement("form"),
      userEmail = document.createElement("input"),
      userName = document.createElement("input"),
      userPhone = document.createElement("input"),
      subBut = document.createElement("button");

segment.appendChild(form).setAttribute("method", 'POST')

userEmail.setAttribute('id', "email");
userName.setAttribute('id', "name");
userPhone.setAttribute('id', "phone");

form.setAttribute("action", "/index")
form.appendChild(userEmail);
form.appendChild(userName);
form.appendChild(userPhone);
form.appendChild(subBut);



userEmail.setAttribute("placeholder", "E-Mail");
userName.setAttribute("placeholder", "Name");
userPhone.setAttribute("placeholder", "Phone");
subBut.innerHTML = "Submit";


