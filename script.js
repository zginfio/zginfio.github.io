

window.onload = function(){
// ---

function element(elm){
  return document.querySelector(elm.toString())
}


var i = 0;
var prev;
form_out = document.querySelectorAll(".form");
next_btn = document.querySelector(".next-btn");
main_login = document.querySelector(".main-login");
title = document.querySelector(".title")

next_btn.addEventListener("click", next);
generate_btn = element(".generate-btn")
//

//var x = "title"



function next(){
  i++;
  for (i = 0; i < form_out.length; i++){
    //form_out[i].style.display = "none";
    next_btn.innerHTML = "GENERATE CASH";
    main_login.classList.add("go-out")

    setTimeout(function(){
      main_login.style.animation = "none"
      main_login.innerHTML = "<h2 class = 'warn'> You're about to deposit $1,000,000,000 to your NitroType account </h3> <div class = 'summary'> Username: ginfio_best <br> Last race: today, 23, 23, 23 <br> Current amount cash: $210,230,023 </div>"
      title.innerHTML = "Summary";
      next_btn.remove();
      element(".generate-btn").style.opacity = "1";
      generate_btn.style.zIndex = "1"
    }, 501)

    

  }
}


generate_btn.addEventListener("click", generate);

function generate(){
  main_login.innerHTML = "red"
}




} // window
