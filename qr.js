const btn = document.getElementById(`btn`);
const qr = document.getElementById(`qr`);
const input = document.getElementById(`input`);
const qrImg = document.getElementById(`qrimg`);
const hy = document.getElementById(`hy`);
btn.addEventListener(`click`, generate);

function generate() {
  if (input.value == ``) {
    hy.innerHTML = `enter some text`;
  } else {
    hy.innerHTML = "";
    qrImg.src =
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`+input.value;

    qr.classList.replace(`bg-slate-400`, `bg-white`);
  }
  update();
}
function update() {
  if (input.value == ``) {
    qrImg.src = ``;
    qr.classList.replace(`bg-white`, `bg-slate-400`);
    hy.innerHTML = `enter some text`;
  }
}
setInterval(() => {
  update();
}, 100);
