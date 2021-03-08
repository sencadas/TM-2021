// Your JS Script here

adicionarImagem = () => {
    const imageContainer = document.getElementById("imageContainer")
    const img = document.createElement("img")

    img.src = "https://placeimg.com/250/150/" + imageContainer.children.length

    imageContainer.appendChild(img);
    updateCounter(imageContainer);

}

removerImagem = () => {
    const imageContainer = document.getElementById("imageContainer")
    const randomNumber = (Math.floor(Math.random() * (imageContainer.children.length)));
    imageContainer.children[randomNumber].remove()
    updateCounter(imageContainer);                            
}

updateCounter = () => {
    const span = document.getElementById("contador")
    span.innerText = imageContainer.children.length.toString()
}