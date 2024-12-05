let prev = document.getElementById('carousel__prev')
let image = document.getElementById("imageToDisplay");
let next = document.getElementById('carousel__next')

prev.addEventListener('click', function() {
    image.style.display = 'block'
})