
let socket = io("http://localhost:1750"); //1
    
socket.on('number', function (data) { //4
      $('#counter').text(data.number);
      console.log(data)
  });

  $('#epic').on('click',function(){
    socket.emit('addOne', {msg:'Epic button clicked'});
})

$('#reset').on('click',function(){
    socket.emit('reset', {msg:'Reset button clicked'});
})