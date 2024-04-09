const navToggle = document.querySelector('.mobile-nav-toggle')
const navList = document.querySelector('.mobile-nav')

navToggle.addEventListener('click', function () {
    navList.classList.toggle('nav-show')
})


const tendinaButton = document.querySelectorAll('.tendina-button')

tendinaButton.forEach(button => {
    button.addEventListener('mouseenter', function (){
        const tendina = this.querySelector('.tendina');

        closeAllTendine();

        clearTimeout(timeoutId);

        tendina.classList.add('tendina-show');
    })

    button.addEventListener('click', function () {
        const tendina = this.querySelector('.tendina');

        tendina.classList.toggle('tendina-show')

    })

    button.addEventListener('mouseleave', function (){
        const tendina = this.querySelector('.tendina');

        timeoutId = setTimeout(() => {
            tendina.classList.remove('tendina-show');
        }, 200);
    })
})

function closeAllTendine() {
    const allTendine = document.querySelectorAll('.tendina-show');
    allTendine.forEach(tendina => {
        tendina.classList.remove('tendina-show');
    });
}

