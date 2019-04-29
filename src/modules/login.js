import React from 'react';


export default class Login extends React.Component{

    render(){
        return(
            <div>
            <div>
            <form method="POST" action="/index">
            <input type='text' placeholder="Username" name="username"></input>
            <br></br>
            <input type='text' placeholder="Password" name="password"></input>
            <br></br>
            <button type="submit">Submit</button>
            </form>
            </div>
            </div>
        )
    }
}