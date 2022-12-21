// write your code here
const url = 'http://localhost:3000/ramens'
let ramenArray
const ramenMenu = document.querySelector('#ramen-menu')
const ramenImage = document.querySelector('#ramen-detail .detail-image')
const ramenName = document.querySelector('#ramen-detail .name')
const ramenRestaurant = document.querySelector('#ramen-detail .restaurant')
const ramenRating = document.querySelector('#rating-display')
const ramenComment = document.querySelector('#comment-display')
const newRamenForm = document.querySelector('#new-ramen')


//GET all data from server 
const getAllData = () => {
    fetch(url)
    .then(resp => resp.json())
    .then(data => {  

        data.forEach(ramen => {
            addRamenToMenu(ramen)
        })
    });
}
getAllData()

//add ramen to ramen menu
const addRamenToMenu = (ramen) => {
    const ramenImg = document.createElement('img')
    ramenImg.src = ramen.image
    ramenImg.alt = ramen.name
    ramenImg.addEventListener('click', () =>{
        ramenImage.src = ramen.image
        ramenName.innerText = ramen.name
        ramenRestaurant.innerText = ramen.restaurant
        ramenRating.innerText = ramen.rating 
        ramenComment.innerText = ramen.comment
    })
    ramenMenu.append(ramenImg)
}

// ramenMenu.addEventListener('click', () => {
//     alert('program me!')
// })

const ramenDeets = (ramen) =>{
    
}

// part 3