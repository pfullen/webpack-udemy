import MyImage from './me.jpg';

const addImage = () => {
    const img = document.createElement('img');
    img.alt = 'MyImg';
    img.width = 300;
    img.src = MyImage;
    const body = document.querySelector('body')
    body.appendChild(img);
}

export {addImage};