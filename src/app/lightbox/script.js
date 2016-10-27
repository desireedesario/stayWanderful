/* Lightbox js */
document.getElementById("ex").addEventListener("click", closeBox);

function closeBox(e){
  e.target.parentNode.parentNode.parentNode.style.background="rgba(0,0,0,0)";
  e.target.parentNode.parentNode.parentNode.remove();
};
