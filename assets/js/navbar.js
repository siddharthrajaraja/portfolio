window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("pic").style.transform="scale(0.55) ";
      document.getElementById("pic").style.transform +="translateY(-60px)";
     
    } else {
        document.getElementById("pic").style.transform="scale(1)";
    }
  }

  function gototop() {
    if (window.scrollY>0) {
        window.scrollTo(0,window.scrollY-20)
        setTimeout("gototop()",10)
    }
}