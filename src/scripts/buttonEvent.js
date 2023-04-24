
import { categories, products } from "./productsData.js"
import { renderAlbum } from "./render.js"

export function buttonCategory() {

    const buttons = document.querySelectorAll(".section-first__category")
    const range = document.querySelector(".section-secound__range")


    buttons.forEach(category => {
        category.addEventListener('click', () => {

            let newArray = []

            removeClassSelected()
            category.classList.add("section-first__category--selected")

            if (event.target.id != categories[0]) {
                const numberCategory = categories.findIndex(cate => cate === event.target.id)
                newArray = products.filter(album => album.category === numberCategory && album.price <= range.value)
                renderAlbum(newArray)

            } else {
                newArray = products.filter(album => album.price <= range.value)
                renderAlbum(newArray)
            }
        })
    })
}

function removeClassSelected() {

    const buttons = document.querySelectorAll(".section-first__category")

    buttons.forEach(button => {
        button.classList.remove("section-first__category--selected")
    })
}

export function rangeValue() {

    const range = document.querySelector(".section-secound__range")


    range.addEventListener('input', () => {

        let category = document.querySelector(".section-first__category--selected")
        let newArray = []

        if (category === null || category.id === categories[0]) {
            newArray = products.filter(album => album.price <= range.value)
            renderAlbum(newArray)
        } else {
            const numberCategory = categories.findIndex(cate => cate === category.id)
            newArray = products.filter(album => album.price <= range.value && album.category == numberCategory)
            renderAlbum(newArray)
        }

    })

}

export function handleTheme() {

    const html = document.querySelector("html")
    const button = document.querySelector(".header__button")
    const img = document.querySelector(".header__img")
    const preference = localStorage.getItem('dark__mode')

    if (preference == 'true') {
        html.classList.toggle('dark__mode')
        img.src = "./src/assets/img/sun.svg"
    }

    button.addEventListener('click', () => {

        html.classList.toggle('dark__mode')

        if (html.classList.contains('dark__mode')) {
            img.src = "./src/assets/img/sun.svg"
            localStorage.setItem('dark__mode', true)
        } else {
            img.src = "./src/assets/img/moon.svg"
            localStorage.setItem('dark__mode', false)
        }
    })


}