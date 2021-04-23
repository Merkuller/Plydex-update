if (document.querySelector('.shopBasket-secondStep') || document.querySelector('.pickup-adress')) {

    let btns = document.querySelectorAll('.shopBasket-secondStep__button-label');
    
    btns.forEach(label => {
        label.addEventListener('click', () => {
        document.querySelector('.shopBasket-secondStep__identification-button.active-button').classList.remove('active-button');
        let btn = label.parentElement;
        btn.classList.add('active-button');
        })
    })
}