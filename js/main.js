let images = document.querySelectorAll('.main__carousel img');
let nextButton = document.getElementById('carousel__next')
let prevButton = document.getElementById('carousel__prev')

var currentIndex = 0;

// mise a jour de lemplacement de l'index 
function update() {
    images.forEach((img, i) => {
        if (currentIndex === i) {
            img.style.display = "block"
        } else {
            img.style.display = "none"
        }
    });
}


nextButton.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % images.length
    update()
})

prevButton.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length; 
    update()
})


update()