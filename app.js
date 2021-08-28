const buttonSub = document.querySelector('#buttonSub')
const card = document.querySelector('.card')
const closeModal = document.querySelector('#closeModal')
const submitSub = document.querySelector('#submitSub')

buttonSub.addEventListener('click', () => {
    if(card.classList.contains('disable')){
        card.classList.remove('disable')
    }
})

closeModal.addEventListener('click', () => {
    card.classList.add('disable')
})

submitSub.addEventListener('click', () => {
    card.classList.add('disable')
})