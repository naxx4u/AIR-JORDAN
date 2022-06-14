const body = document.querySelector('body'),
      before = document.querySelector('.before'),
      change = document.querySelector('.change_theme'),
      instruments = document.querySelector('.wrapper_instruments'),
      btn = document.querySelector('.btn'),
      btnBlack = document.querySelector('#btnBlack'),
      buyButton = document.querySelector('.footer-buy'),
      footerLanguage = document.querySelector('.footer-language'),
      bgInput = document.querySelector('.footer-style'),
      changeStyleText = document.querySelector('#changeStyleText')


change.addEventListener('click', function(){
        if(change.checked){
            body.classList.add('light_theme') + before.setAttribute('style', 'opacity: 0')
            bgInput.classList.add('light_theme') + before.setAttribute('style', 'opacity: 0')
            changeStyleText.innerHTML = "BLACK" 
            instruments.classList.add('light_theme')
            btn.setAttribute('style', 'opacity: 0 ') + btnBlack.setAttribute('style', 'opacity: 1000')
            buyButton.classList.add('light_theme')
            footerLanguage.classList.add('light_theme')
           
        } else{
            body.classList.remove('light_theme') + before.setAttribute('style', 'opacity: 100')
            bgInput.classList.remove('light_theme') + before.setAttribute('style', 'opacity: 100')
            changeStyleText.innerHTML = "WHITE"
            instruments.classList.remove('light_theme') 
            btn.setAttribute('style', 'opacity: 100') + btnBlack.setAttribute('style', 'opacity: 0')
            footerLanguage.classList.remove('light_theme') 
            buyButton.classList.remove('light_theme')
        }
    })


