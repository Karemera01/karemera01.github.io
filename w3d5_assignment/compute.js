"use strict";
function okClick(){
  
    let btn=document.getElementById("go");
    btn.className="awesome";
}
function init(){
    document.getElementById("go").onclick=okClick;

}
window.onload=init;