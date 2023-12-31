const nextBtnEl=document.querySelector('.next')
const imgContainerEl=document.querySelector('.img-container')
const imgsEl=document.querySelectorAll('img')
const prevEl=document.querySelector('.prev')

let currentImg=1

let timeOut;

nextBtnEl.addEventListener('click', ()=>{
    currentImg++;
    clearTimeout(timeOut);
    updateImg();
}) 

prevEl.addEventListener('click', ()=>{
    currentImg--;
    clearTimeout(timeOut);
    updateImg();
})

updateImg()

function updateImg() {
    if(currentImg>imgsEl.length) {
        currentImg=1
    } else if(currentImg<1) {
        currentImg=imgsEl.length
    }
    imgContainerEl.style.transform=`translateX(-${(currentImg-1) * 500}px)`
    timeOut=setTimeout(()=>{
        currentImg++
        updateImg()
    }, 3000)
}