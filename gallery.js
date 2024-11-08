const images = {...document.querySelectorAll('.image')};

// popup

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const largeIndex = document.querySelector('.index');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0; // will track the current image

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    })
})

const updateImage = (i) => {
    let path = `img/img${i+1}.jpeg`;
    largeImage.src = path;
    imageName.innerHTML = `0${i+1}`;
    index = i;
}

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})