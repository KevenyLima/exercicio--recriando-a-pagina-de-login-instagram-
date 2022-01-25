let time =4000,
currentImageIndex=0,
images = document
        .querySelectorAll("#slider img.tela")
max = images.length;
function nextImage(){
    images[currentImageIndex].classList.remove("selected")
    currentImageIndex++
    if(currentImageIndex >= max){
        currentImageIndex=0
    }
    images[currentImageIndex].classList.add("selected")  
 }
function start(){
 setInterval(()=> {
    nextImage()
 },time)

}
setInterval()
window.addEventListener("load",start)

window.addEventListener("")