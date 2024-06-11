const navToggle = document.querySelector('.mobile-nav-toggle')
const navList = document.querySelector('.mobile-nav')
const iconMenu = document.querySelectorAll('.iconrow')

navToggle.addEventListener('click', function () {
    navList.classList.toggle('nav-show');
    document.body.classList.toggle('no-scroll');

    
    iconMenu.forEach(icon => {
        icon.classList.toggle('x-icon')
    })
})


const tendinaButton = document.querySelectorAll('.tendina-button')

tendinaButton.forEach(button => {
    button.addEventListener('mouseenter', function (){
        const tendina = this.querySelector('.tendina');

        closeAllTendine();

        clearTimeout(timeoutId);

        tendina.classList.add('tendina-show');
        button.classList.add('button-opened');
    })  

    button.addEventListener('click', function () {
        const tendina = this.querySelector('.tendina');

        tendina.classList.toggle('tendina-show');
        button.classList.toggle('button-opened');

    })

    button.addEventListener('mouseleave', function (){
        const tendina = this.querySelector('.tendina');

        timeoutId = setTimeout(() => {
            tendina.classList.remove('tendina-show');
            button.classList.remove('button-opened');
        }, 200);
    })
})

function closeAllTendine() {
    const allTendine = document.querySelectorAll('.tendina-show');
    allTendine.forEach(tendina => {
        tendina.classList.remove('tendina-show');
    });
}


// SLIDER AZIENDE

window.addEventListener('load', function() {
    const sliderAziende = document.querySelectorAll('.slider-aziende');

    sliderAziende.forEach(slider => {
        let card = slider.querySelectorAll('.card-aziende');
        let next = slider.querySelector('.next');
        let prev = slider.querySelector('.prev');
        var counter = 0;
        let deleteInterval;
    
        let canClick = true;
        let clickDelay = 900; // 900ms
    
        next.addEventListener('click', () => handleClick(slideNext));
        prev.addEventListener('click', () => handleClick(slidePrev));
    
        function handleClick(slideFunction) {
            if (canClick) {
                canClick = false;
                slideFunction();
                resetAutoSliding();
                setTimeout(() => {
                    canClick = true;
                }, clickDelay);
            }
        }
    
        function slideNext() {
            card[counter].style.animation = 'next1 800ms ease-in forwards';
            if (counter >= card.length - 1) {
                counter = 0;
            } else {
                counter++;
            }
            card[counter].style.animation = 'next2 800ms ease-in forwards';
        }
    
        function slidePrev() {
            card[counter].style.animation = 'prev1 800ms ease-in forwards';
            if (counter == 0) {
                counter = card.length - 1;
            } else {
                counter--;
            }
            card[counter].style.animation = 'prev2 800ms ease-in forwards';
        }
    
        if (window.innerWidth > 600) {
            autoSliding();
        }
    
        function autoSliding() {
            deleteInterval = setInterval(timer, 3500);
        }
    
        function timer() {
            slideNext();
        }
    
        function resetAutoSliding() {
            clearInterval(deleteInterval);
            autoSliding();
        }

        slider.addEventListener('mouseover', () => {
            clearInterval(deleteInterval);
        });
    
        slider.addEventListener('mouseout', () => {
            resetAutoSliding();
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 600) {
                resetAutoSliding();
            } else {
                clearInterval(deleteInterval);
            }
        });
    });
})


// SHOW MORE AZIENDA

const containerShowMore = document.querySelectorAll('.container-info');

containerShowMore.forEach(container => {
        const showButton = container.querySelector('.show-button');
        const contentToShow = container.querySelector('.info-azienda');

        showButton.addEventListener('click', function (){
            contentToShow.classList.toggle('show-more-azienda')
        })

        // contentToShow.classList.toggle('show-more-azienda')
});
