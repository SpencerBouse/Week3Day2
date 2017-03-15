var nightday = document.getElementById('switch');
var liveClock = document.querySelector('.clock');
var colorClock = document.querySelector('.hexclock');

var switchstatus = false;

nightday.addEventListener('click',function(){
  if(switchstatus === false){
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = '#363636';
    document.getElementById('hex').style.color = '#363636';
    switchstatus = true;
  }else{
    document.querySelector('body').style.backgroundColor = '#363636';
    document.querySelector('body').style.color = 'white';
    document.getElementById('hex').style.color = 'white';
    switchstatus = false;
  }
})

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  liveClock.innerHTML = h+':'+m+':'+s;
  var update = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function startTimecolor() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  colorClock.innerHTML = '#'+h+''+m+''+s;
  document.querySelector('body').style.backgroundColor = '#'+h+''+m+''+s;
  var update = setTimeout(startTimecolor, 500);
}
