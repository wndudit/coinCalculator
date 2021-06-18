$(document).ready(function() {
  $("#submit").click(function(){
    $.ajax({
      url:'https://api.bithumb.com/public/ticker/BTC?apikey=ae62810eaf0ca86dd54183106df495fe',
      type:'get',
      dataType:'jsonp',
      jsonpCallback: 'callback',
      crossDomain : true,
      error:function(){
        alert('Error');
      },
      success:function(obj){
        alert("success");
      }
    });
  });
});
