const body = document.querySelector('body')
const before = document.querySelector('.before')
const change = document.querySelector('.change_theme')
const instruments = document.querySelector('.wrapper_instruments')
const btn = document.querySelector('.btn')
const btnBlack = document.querySelector('#btnBlack')
const buyButton = document.querySelector('.footer-buy')
const footerLanguage = document.querySelector('.footer-language')
const bgInput = document.querySelector('.footer-style')
const changeStyleText = document.querySelector('#changeStyleText')

change.addEventListener('click', function(){
    if(change.checked){
        body.classList.add('light_theme') + before.setAttribute('style', 'opacity: 0')
    } else if (!change.checked){
        body.classList.remove('light_theme') + before.setAttribute('style', 'opacity: 100')
    }
})

change.addEventListener('click', function(){
    if(change.checked){
        bgInput.classList.add('light_theme') + before.setAttribute('style', 'opacity: 0')
    } else if (!change.checked){
        bgInput.classList.remove('light_theme') + before.setAttribute('style', 'opacity: 100')
    }
})

change.addEventListener('click', function(){
    if(!change.checked){
        changeStyleText.innerHTML = "BLACK" 
    } else {
        changeStyleText.innerHTML = "WHITE" 
    }
})





change.addEventListener('click', function(){
    if(change.checked){
        instruments.classList.add('light_theme') 
    } else {
        instruments.classList.remove('light_theme') 
    }
})
change.addEventListener('click', function(){
    if(change.checked){
        btn.setAttribute('style', 'opacity: 0 ') + btnBlack.setAttribute('style', 'opacity: 1000') 
    } else {
        btn.setAttribute('style', 'opacity: 100') + btnBlack.setAttribute('style', 'opacity: 0') 
    }
})
change.addEventListener('click', function(){
    if(change.checked){
        buyButton.classList.add('light_theme') 
    } else {
        buyButton.classList.remove('light_theme') 
    }
})
change.addEventListener('click', function(){
    if(change.checked){
        footerLanguage.classList.add('light_theme') 
    } else {
        footerLanguage.classList.remove('light_theme') 
    }
})

