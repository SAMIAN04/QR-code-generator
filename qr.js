const btn = document.getElementById(`btn`);
const qr = document.getElementById(`qr`);
const input = document.getElementById(`input`);
const qrImg = document.getElementById(`qrimg`);
const hy = document.getElementById(`hy`);
btn.addEventListener(`click`, generate);

function generate() {
  if (input.value == ``) {
    hy.innerHTML = `enter some text`;
    // qrImg.src = ``
    // console.log(`bug`);
  } else {
    hy.innerHTML = "";
    qrImg.src =
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`+input.value;

    qr.classList.replace(`bg-slate-400`, `bg-gray-200`);
  }
}
