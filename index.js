const images = document.querySelectorAll('.gallery-image');  
const lightbox = document.getElementById('lightbox');  
const lightboxImage = document.getElementById('lightbox-image');  
const close = document.getElementById('close');  

images.forEach(image => {  
    image.addEventListener('click', () => {  
        lightbox.style.display = 'flex';  
        lightboxImage.src = image.src;  
    });  
});  

close.addEventListener('click', () => {  
    lightbox.style.display = 'none';  
});  

lightbox.addEventListener('click', () => {  
    lightbox.style.display = 'none';  
});