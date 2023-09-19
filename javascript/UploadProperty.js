import { everyProperty } from "./everyProperty.js"

let allProperties = everyProperty


const submitForm = document.querySelector('.formButton')

const image = document.querySelector('#input-file')
const address = document.querySelector('#address')
const roomType = document.querySelector('#roomType')
const price = document.querySelector('#price')



submitForm.document.addEventListener('click', (e) => {
    e.preventDefault()


    const data = {

        imageSrc: image.value,
        address: address.value,
        roomType: roomType.value,
        price: price.value
    }

    allProperties.push(data)

})
