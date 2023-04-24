
import { buttonCategory, rangeValue } from "./buttonEvent.js";
import { products } from "./productsData.js";

export function renderCategory(array) {

    const containerCategory = document.querySelector(".section-first__container-category")

    array.forEach(element => {

        const button = document.createElement('button')

        button.classList.add('section-first__category')
        button.id = element

        containerCategory.appendChild(button)

        button.innerText = element
    })

    buttonCategory()
}

export function renderAlbum(array) {

    const container = document.querySelector(".section-third__container-albums")

    container.innerHTML = ''

    array.forEach(album => {

        const divContanier = document.createElement('div')
        const img = document.createElement('img')
        const containterBottom = document.createElement('div')
        const divData = document.createElement('div')
        const band = document.createElement('span')
        const year = document.createElement('span')
        const name = document.createElement('h2')
        const divValue = document.createElement('div')
        const value = document.createElement('span')
        const button = document.createElement('button')

        divContanier.classList.add("container-albums__container")
        img.classList.add("container-albums__img")
        containterBottom.classList.add("container-albums__container-bottom")
        divData.classList.add("container-albums__data")
        band.classList.add("container-albums__band")
        year.classList.add("container-albums__year")
        name.classList.add("container-albums__name")
        divValue.classList.add("container-albums__div")
        value.classList.add("container-albums__value")
        button.classList.add("container-albums__button")

        container.appendChild(divContanier)
        divContanier.append(img, containterBottom)
        containterBottom.append(divData, name, divValue)
        divData.append(band, year)
        divValue.append(value, button)

        img.src = album.img
        band.innerText = album.band
        year.innerText = album.year
        name.innerText = album.title
        value.innerText = `R$${album.price.toFixed(2)}`
        button.innerText = "Comprar"
        button.dataset.id = album.id

    })
}

export function renderSpanValue() {

    const input = document.querySelector(".section-secound__range")
    const span = document.querySelector(".section-secound__value")

    span.innerText = Number(input.value)

    maxInput()

    input.addEventListener('input', () => {
        span.innerText = Number(input.value)
    })

    rangeValue()
}

function maxInput() { 

    const input = document.querySelector(".section-secound__range")
    let maxValue = 0

    products.forEach(element =>{
        if(element.price > maxValue){
            maxValue = element.price
        }
    })

    input.max = maxValue    
}