//
const returnTo = document.getElementById("return-top");
returnTo.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}