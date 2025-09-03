alert("hi")

console.log("we workin, baby!")

document.addEventListener("DOMContentLoaded", () => {
    console.log("we workin, baby!");
  });

  document.getElementById('btnClicky').addEventListener('click', btnClicky);
// document.addEventListener("close",  () => {
//   console.log("we workin, baby!");
// });


function btnClicky () {
  btnClicky.getElementById('click', () => { document.forEach(el => { el.style.transform = 'rotate(15deg)'; }); });
//querySelectorAll('.yourClassName')
console.log('after rotation');
}
  const btnClicky = document.getElementById('btnClicky'); btnClicky.addEventListener('click', () => { });
  btnClicky.addEventListener('click', () => { document.getElementById('blogEntry').textContent = "Why did the pizza maker go broke? Because he just couldn't make enough dough!"; });