$(document).ready(function(){
  //control the top sidebar menu's items
  //home
  $("#mbtn1").click(function(){
      $('html,body').animate({scrollTop:$('#photoSlide').offset().top},600);
    
  });

  //control scroll back to top button
  // $("#gotopbutton").on({
  //   mouseenter: function(){
  //     $(this).addClass('animated shake');
  //   },
  //   mouseleave: function(){
  //     $(this).removeClass('animated shake');
  //   },
  //   click: function(){
  //     $('html,body').animate({scrollTop:$('#home').offset().top},600);
  //   }
  // });

  // show the modal
  $("#showmybtn").click(function(){
    $('.ui.modal')
      .modal('show');
  });

  // contact me form control
  $('.ui.form.segment')
    .form({
      on: 'blur',
      fields: {
        empty: {
          identifier  : 'yourname',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter your name'
            }
          ]
        },
        email: {
          identifier  : 'youremail',
          rules: [
            {
              type   : 'email',
              prompt : 'Please enter a valid e-mail'
            }
          ]
        },
        tellempty: {
          identifier  : 'tellmewhat',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter value in You want to tell me what'
            }
          ]
        }
      }
    });


  // //aniview control
  // var options = {
  //     animateThreshold: 100,
  //     scrollPollInterval: 20
  // }
  // $('.aniview').AniView(options);


});
