document.querySelector('.banner-btn').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'none';
    document.querySelector('.form-container').style.cssText = 'opacity: 1; visibility: visible';
    document.querySelector('.container').style.background = 'radial-gradient(circle, rgba(60,63,255,1) 0%, rgba(158,0,255,1) 100%)';
});

document.querySelector('.x-btn').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'flex';
    document.querySelector('.form-container').style.cssText = 'opacity: 0; visibility: hidden';
    document.querySelector('.container').style.cssText = 'background: linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .7)), url(images/bg1.jpg) center no-repeat; background-size: cover';
});
