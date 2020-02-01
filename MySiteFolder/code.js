//accordion
$(function(){
  $( function() {
      $( "#accordion" ).accordion({
        heightStyle: 'content',
        animate: 1200,
        collapsible: true,
        active: 0});
  });

//links naming
  $('.link1').text('Coding!!!');
  $('.link2').text('RC Trophy');
  $('.link3').text('Bicycle Riding');
  $('.link4').text('Niva Off-Road');

  $('.link').on('click', function(){
  //let cl = ($(this.childNodes).attr('class'));
  let cl = $('a', this).attr('class');
  cls = (cl.slice(-1))-1;
  console.log('cls=' + cls);
  $( "#accordion" ).accordion({active: cls});
  })

  //about me block
  $('#additional').hide();
  setTimeout(function(){
    $('#additional').show("fold", "slow")
  }, 1000);

  //about me moouseenter-effect
  $('#additional div').on('mouseenter', function(){
    $(this).effect("bounce", "slow"); // shake, bounce, slide
  })

  //time in footer
  $('#footer #cur_time').text('it is time for a change!');
  setInterval(function(){
    let date = new Date();
    let min = date.getMinutes() + '';
    let mins;
    if (min.length<2) {
      mins = '0' + min;}
    else if(min.length == 2){
      mins = min;
    }

    let time = date.getHours()+':'+ mins;
    $('#footer #cur_time').text(time).effect("bounce", "slow")
  }, 1000);

  //RC photo-preview
  $('#rc_preview img').on('click', function(){
    $('#rc_large img').attr('src', $(this).attr('src'))
  });


  })
