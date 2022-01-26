$(document).ready(function(){
    $('.Kontent-Silka').click(function(){
       var target = $(this).attr('href');
       $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
       return false;
    });
    $('.Kontent2BlocksSilka').click(function(){
       var target = $(this).attr('href');
       $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
       return false;
    });
 });



//Обратный отсчёт
var countDownDate = new Date("jan 1, 2023 00:00:00").getTime();
var countDownFunction = setInterval(function(){

  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance /(1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60  * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds + "";

      //Когда отсчёт будет равен 0
      if (distance < 0) {
        clearInterval(countDownFunction);
        document.getElementById("timer").innerHTML= "Время истекло";
      }
}, 1000)

/* Слайдер */
var page_int = 1;

function back_button()
{
  console.log("back click");
  switch(page_int)
  {
    case 1:
    {
      document.getElementById('s1').style.marginLeft = "-50%";
      page_int = 3;
      break;
    }
    case 2:
    {
      document.getElementById('s1').style.marginLeft = "0";
      page_int = 1;
      break;
    }
    case 3:
    {
      document.getElementById('s1').style.marginLeft = "-25%";
      page_int = 2;
      break;
    }
  }
}


function next_button()
{
  console.log("next click");
  switch(page_int)
  {
    case 1:
    {
      document.getElementById('s1').style.marginLeft = "-25%";
      page_int = 2;
      break;
    }
    case 2:
    {
      document.getElementById('s1').style.marginLeft = "-50%";
      page_int = 3;
      break;
    }
    case 3:
    {
      document.getElementById('s1').style.marginLeft = "0";
      page_int = 1;
      break;
    }
  }
}
