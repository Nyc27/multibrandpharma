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
        let dots = slider.querySelectorAll('.dot');
        var counter = 0;
        let deleteInterval;

        next.addEventListener('click', slideNext);
        function slideNext(){
            card[counter].style.animation = 'next1 800ms ease-in forwards';
            if(counter >= card.length-1){
                counter = 0;
            } else {
                counter++;
            }
            card[counter].style.animation = 'next2 800ms ease-in forwards';
            indicators();
        }

        prev.addEventListener('click', slidePrev);
        function slidePrev(){
            card[counter].style.animation = 'prev1 800ms ease-in forwards';
            if(counter == 0){
                counter = card.length-1;
            } else {
                counter--;
            }
            card[counter].style.animation = 'prev2 800ms ease-in forwards';
            indicators();
        }

        function autoSliding (){
            deleteInterval = setInterval(timer, 3500);
            function timer(){
                slideNext();
                indicators();
            }
        }
        autoSliding();

        slider.addEventListener('mouseover', function(){
            clearInterval(deleteInterval);
        })

        slider.addEventListener('mouseout', autoSliding);
        

        slider.addEventListener('touchstart', function(){
            clearInterval(deleteInterval);
        })

        slider.addEventListener('touchend', autoSliding);

        function indicators(){
            for( i = 0; i < dots.length; i++){
                dots[i].className = dots[i].className.replace('active', '');
            }
            dots[counter].className+= ' active';
        }
    });
});
