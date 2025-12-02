document.addEventListener("DOMContentLoaded", () => {
   console.log("document loaded");
   document.getElementById('onClick').addEventListener('click', onClick); 
 }
);

function onClick () {
  console.log('in onClick event');
  document.getElementById('onClick').style.transform = 'rotate(15deg)'
  console.log('after rotation');
}
