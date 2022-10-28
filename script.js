let isIgnite = false
// function changeCard(event) {
//   const card = event.currentTarget
//   const bg = isIgnite ? "explorer" : "ignite"
//   isIgnite = !isIgnite
//   card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
// }


let swapTrack = document.querySelector("#choseTrack");

swapTrack.addEventListener("click", function(){
  const card = document.querySelector(".card")
  const bg = isIgnite ? "explorer" : "ignite"
  isIgnite = !isIgnite
  card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
});