import KiwiImg from "./kiwi.jpg";

function addImage() {
    const img = document.createElement("img");

    img.width = 300;
    img.alt = "kiwi";

    img.src = KiwiImg;

    const body = document.querySelector("body");

    body.appendChild(img);
}

export default addImage;
