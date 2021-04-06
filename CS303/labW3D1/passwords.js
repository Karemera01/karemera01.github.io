"use strict";
/* exports at end of file since exporting an object, which can only be referenced after definition */
/* eslint-disable */

exports.askPassword=askPassword;

function askPassword(ok, fail,password) {
    // let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    loginOk() {
      alert(`${this.name} logged in`);
    },
  
    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  
  };
  
  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));