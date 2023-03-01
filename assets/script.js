
var saveBtn=$('.saveBtn');
var timeblock=$('.time-block');
var currentDay= dayjs().format('dddd, MMMM Do');
$('#currentDay').text(currentDay);




$(function () {
  var currentHour = dayjs().get('hour');

    
    saveBtn.on('click',function(){
      var textarea= $(this).siblings('.description').val();
      var hourid=$(this).parent().attr('id');
      localStorage.setItem(hourid, textarea);


     
    });

    timeblock.each(function (){
      var hour = $(this).attr('id');
      var hourText = parseInt(hour);

      if(currentHour === hourText){
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
        
      });



      
  
  });