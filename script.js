let hours = document.querySelector("#hours");
let secund = document.querySelector("#secund");
let milS = document.querySelector("#milS");
let mon = document.querySelector("#mon");

function time(params) {
  setInterval(() => {
    let hourse = moment().hour();
    let Pm = moment().minute();
    let sec = moment().second();
    let month = moment().format("MM");
    let yers = moment().format("YYYY");

    mon.innerHTML = month;
    secund.innerHTML = Pm;
    hours.innerHTML = hourse;
    milS.innerHTML = sec;
  }, 1000);
}
time();
