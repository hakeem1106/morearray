/*const segment = document.getElementById('root'),
      form = document.createElement("form"),
      userName = document.createElement("input"),
      passWord = document.createElement("input"),
      subBut = document.createElement("button");

segment.appendChild(form).setAttribute("method", 'POST')

userName.setAttribute('name', "username");
passWord.setAttribute('name', "password");


form.setAttribute("action", "/index")
form.appendChild(userName);
form.appendChild(passWord);
form.appendChild(subBut);





userName.setAttribute("placeholder", "Username");
passWord.setAttribute("placeholder", "Password");
subBut.setAttribute("type","submit")
subBut.innerHTML = "Submit";


*/

import React from 'react';
import ReactDOM from 'react-dom';
import Login from './modules/login'

ReactDOM.render(<Login />,document.getElementById('root'));