if (document.querySelector('.shopBasket-firstStep')) {

    let btns = document.querySelectorAll('.shopBasket-firstStep__button-label');
    
    btns.forEach(label => {
        label.addEventListener('click', () => {
        document.querySelector('.shopBasket-firstStep__delivery-button.active-button').classList.remove('active-button');
        let btn = label.parentElement;
        btn.classList.add('active-button');
        })
    })
}