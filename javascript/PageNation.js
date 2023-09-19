import { everyProperty } from "./everyProperty.js"

let allProperties = everyProperty

// const allProperties = [
//     {
//         imageSrc: './images/propertyOne.png',
//         address: '2578 Folsom Street, San Francisco, CA, 94110',
//         roomType: 'Private Room',
//         price: '$1200/month',



//     },

//     {
//         imageSrc: './images/propertyTwo.png',
//         address: '2578 Folsom Street, San Francisco, CA, 94110',
//         roomType: 'Private Room',
//         price: '$1200/month',



//     },

//     {
//         imageSrc: './images/propertyThree.png',
//         address: '2578 Folsom Street, San Francisco, CA, 94110',
//         roomType: 'Private Room',
//         price: '$1200/month',



//     },

//     {
//         imageSrc: './images/propertyFour.png',
//         address: '2578 Folsom Street, San Francisco, CA, 94110',
//         roomType: 'Private Room',
//         price: '$1200/month',



//     },

//     {
//         imageSrc: './images/propertyFive.png',
//         address: '2578 Folsom Street, San Francisco, CA, 94110',
//         roomType: 'Private Room',
//         price: '$1200/month',



//     },

//     {
//         imageSrc: './images/propertySix.png',
//         address: '2578 Folsom Street, San Francisco, CA, 94110',
//         roomType: 'Private Room',
//         price: '$1200/month',



//     },


// ]




const propertyContainer = document.getElementById('propertiesContainer')
const pagination_element = document.getElementById('pagination')



let current_page = 1
let properties = 3
let count = 0
let propertyColumnNumber = 0


function DisplayProperties(propertiesList, container, properties_per_page, page) {
    container.innerHTML = ""
    page--



    let start = properties_per_page * page
    let end = start + properties_per_page
    let paginatedProperties = propertiesList.slice(start, end)

    for (let i = 0; i < paginatedProperties.length; i++) {

        let propertyAddress = paginatedProperties[i].address
        let propertyRoomType = paginatedProperties[i].roomType
        let propertyPrice = paginatedProperties[i].price
        let propertyImageSrc = paginatedProperties[i].imageSrc





        let property = document.createElement('div')
        property.classList.add('property')
        propertyContainer.appendChild(property)


        let imageOfProperty = document.createElement('img')
        imageOfProperty.src = propertyImageSrc
        imageOfProperty.classList.add('propertyImage')
        property.appendChild(imageOfProperty)



        let addressAndPrice = document.createElement('div')
        addressAndPrice.classList.add('addressAndPrice')
        property.appendChild(addressAndPrice)



        let center = document.createElement('div')
        center.classList.add("center")
        addressAndPrice.appendChild(center)

        let address = document.createElement('p')
        address.classList.add('address')
        address.innerText = propertyAddress
        center.appendChild(address)


        let roomType = document.createElement('p')
        roomType.classList.add('roomType')
        roomType.innerText = propertyRoomType
        center.appendChild(roomType)


        let price = document.createElement('p')
        price.classList.add('price')
        price.innerText = propertyPrice
        center.appendChild(price)


        let propertyInfo = document.createElement('div')
        propertyInfo.classList.add('propertyInfo')
        property.appendChild(propertyInfo)


        let infoContainer1 = document.createElement('div')
        infoContainer1.classList.add('infoContainer')
        propertyInfo.appendChild(infoContainer1)

        let bedIcon = document.createElement('img')
        bedIcon.src = "./svg/BedIcon.svg"
        infoContainer1.appendChild(bedIcon)

        let numberOfBeds = document.createElement('p')
        numberOfBeds.innerText = 4
        infoContainer1.appendChild(numberOfBeds)






        let infoContainer2 = document.createElement('div')
        infoContainer2.classList.add('infoContainer')
        infoContainer2.classList.add('middle')
        propertyInfo.appendChild(infoContainer2)

        let showerIcon = document.createElement('img')
        showerIcon.src = "./svg/ShowerIcon.svg"
        infoContainer2.appendChild(showerIcon)


        let numberOfBaths = document.createElement('p')
        numberOfBaths.innerText = 2
        infoContainer2.appendChild(numberOfBaths)





        let infoContainer3 = document.createElement('div')
        infoContainer3.classList.add('infoContainer')
        propertyInfo.appendChild(infoContainer3)

        let sizeIcon = document.createElement('img')
        sizeIcon.src = "./svg/SizeIcon.svg"
        infoContainer3.appendChild(sizeIcon)


        let sizeNumber = document.createElement('p')
        sizeNumber.innerText = 2
        infoContainer3.appendChild(sizeNumber)







    }


}









function SetupPagination(propertiesList, container, properties_per_page) {
    container.innerHTML = ""

    let page_count = Math.ceil(propertiesList.length / properties_per_page)

    for (let i = 1; i < page_count + 1; i++) {
        let btn = PaginationButton(i, propertiesList)
        container.appendChild(btn)
    }
}

function PaginationButton(page, propertiesList) {

    let button = document.createElement('button')
    button.innerText = page

    if (current_page == page) button.classList.add('active')

    button.addEventListener('click', function () {
        current_page = page
        DisplayProperties(propertiesList, propertyContainer, properties, current_page)

        let current_btn = document.querySelector('.pagenumbers button.active')
        current_btn.classList.remove('active')

        button.classList.add('active')
    })

    return button;
}


DisplayProperties(allProperties, propertyContainer, properties, current_page)
SetupPagination(allProperties, pagination_element, properties)


