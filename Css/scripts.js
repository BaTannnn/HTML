window.onload = function(){
    let forums = document.getElementsByClassName("forum");
    for(let f of forums){
        f.classList.add("wow");
    }
    let oddforums = document.querySelectorAll(".forum:nth-child(odd)");
    for(let f of oddforums){
        f.classList.add("animate__backInLeft");
    }
    let evenforums = document.querySelectorAll(".forum:nth-child(even)");
    for(let f of evenforums){
        f.classList.add("animate__backInRight");
    }
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true,        // default
      }
      )
      wow.init();
}