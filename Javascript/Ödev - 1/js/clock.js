console.log(time);

let name = prompt("What is your name?");

const innerName = document.querySelector("#myName");
innerName.innerHTML = `${name}`;

function time() {
  const today = new Date();
  const time = today.toLocaleTimeString();
  const myTime = document.querySelector("#myClock");
  myTime.innerHTML = `<h2>${time}</h2>`;
}

time();
setInterval(time, 1000);
