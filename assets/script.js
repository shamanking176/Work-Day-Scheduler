// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveBtn=$('.saveBtn');
var timeblock=$('.time-block');
var currentDay= dayjs().format('dddd, MMMM Do');
$('#currentDay').text(currentDay);




$(function () {
    
    saveBtn.on('click',function(){
      var textarea= $(this).siblings("textarea").val();
      var hourid=$(this).parent().attr('id');
      localStorage.setItem(hourid, textarea);
    })

      var currentHour = dayjs().get('hour');


      timeblock.each(function (){
        var hour = $(this).attr('id');
        var hourText = parseInt(hour);

        if(currentHour=== hourText){
          $(this).addClass('present');
        }
        else if(currentHour < hourText){
          $(this).addClass('future');
        }

        else {
          $(this).addClass('past');
        }



      });

      timeblock.each(function(){
        var id= $(this).attr('id');
        var storageValue = localStorage.getItem(id);
        var newValue = $(this).find("textarea").val(storageValue);
        console.log(newValue);
      });



      
  
  });