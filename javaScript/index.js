let projectImgList = document.querySelectorAll(".ProjectImg");

// ----------------------------------------------------
projectImgList.forEach((element, index) => {
    element.style.left = `${index * 100}%`;
});
// ----------------------------------------------------

let count = 0;
let len = projectImgList.length;


function startInterval() {
    inter = setInterval(() => {
        if (count != len - 1) {
            count++;
            slide();
        } else {
            count = 0;
            slide();
        }
    }, 2000);
}

function slide() {
    projectImgList.forEach((element) => {
        element.style.transform = `translateX(-${count * 100}%)`;
    });
}

function stopInterval() {
    clearInterval(inter);
}
startInterval();

function slideLeft() {
    if (count <= 0) {

        count = len - 1;
        slide();
    }
    else {
        count--
        slide();
    }
}
document.getElementById("rightslide").addEventListener("mousemove", () => { stopInterval() })
document.getElementById("rightslide").addEventListener("mouseleave", () => { startInterval() })
document.getElementById("leftslide").addEventListener("mousemove", () => { stopInterval() })
document.getElementById("leftslide").addEventListener("mouseleave", () => { startInterval() })

function slideRight() {
    if (count != len - 1) {
        count++;
        slide();
    }
    else {
        count = 0;
        slide();

    }
}

let projectDetailsframe = document.querySelectorAll(".projectDetailsframe")

projectDetailsframe.forEach((val) => {
    val.addEventListener("mousemove", () => {
        stopInterval()
    })
    val.addEventListener("mouseleave", () => {
        startInterval()
    })

})
