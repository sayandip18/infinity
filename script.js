const URL = "https://picsum.photos/500?"

const container = document.querySelector('.container')


function loadImages(numImages=10){
    let i = 0;
    while(i<numImages){
        const img = document.createElement('img')
        img.src = `${URL}${Math.random()}`
        container.append(img)
        i++
    }
}

loadImages()

window.addEventListener('scroll', () => {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        loadImages()
    }
})