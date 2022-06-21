const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let timess = 0;
loveMe.addEventListener("dblclick", (e) => {
    timess++;
    console.log(timess);
    times.textContent=timess;
    createHeart(e);
  
})

function createHeart(e) {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX;
    const y = e.clientY;
    console.log(x, y);
    // displays your mouse's coordinates in the viewport


    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    console.log(leftOffset, topOffset);
    //The offsetLeft property returns the left position (in pixels) relative to the parent.

    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    console.log(xInside, yInside);

    heart.style.top=`${yInside}px`
    heart.style.left=`${xInside}px`
    

    loveMe.appendChild(heart);


}