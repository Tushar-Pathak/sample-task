$(document).ready(function(){

  //Changing blockQuotes Method.
  var allquotes = $('blockquote');
  var currentquote = 0;
  var currentImage = 0;

  var image = $("#quote-image");

  function changeQuotes(){
    $(allquotes[currentquote]).fadeOut(400, function(){
      if (currentquote === allquotes.length - 1) {
        currentquote = 0;
        currentImage = 0;
      }else {
        currentquote++;
        currentImage++;
      }
      
      if (currentImage == 1){
       image.attr('src','/img/anushka.jpg');        
      }else if(currentImage === 2){
        image.attr('src','/img/girl2.jfif');       
      }else{
        image.attr('src','/img/girl.jfif');          
      }
      console.log(currentquote);
      $(allquotes[currentquote]).fadeIn(400);
    });
  }

  setInterval(changeQuotes, 3000);

  //Animating Buttons.
  $('button').click(function(){  
    $(this).addClass('animated pulse');
    setTimeout(function(){
     $('button').removeClass('animated pulse');
    }, 1000);
  });

  //Window Scrolling Event.
  $(window).scroll(function(){
    $('img').addClass('animated zoomIn');
  });
});