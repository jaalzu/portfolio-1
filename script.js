$(document).ready(function(){
    $('.tech-slider').slick({
        slidesToShow: 5,                  // Muestra 5 elementos a la vez
        slidesToScroll: 1,                // Desplaza un elemento a la vez
        autoplay: true,                  // Activa el autoplay
        autoplaySpeed: 0,                // Sin pausas entre transiciones
        speed: 4000,                    // Duración del desplazamiento en milisegundos
        cssEase: 'linear',               // Transición lineal para desplazamiento constante
        infinite: true,                  // Ciclo infinito
        arrows: false,                   // Oculta las flechas de navegación
        pauseOnHover: false,             // No se pausa al pasar el ratón
        draggable: false,                // Desactiva el arrastre
        swipe: false,                    // Desactiva el desplazamiento táctil
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4, 
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,  // Número de elementos visibles en pantallas medianas
            }
        },
        {
        breakpoint: 480,
                    settings: {
                        slidesToShow: 2,  // Número de elementos visibles en pantallas pequeñas
                    }
                }
           ]
    });
});



jQuery.event.special.touchstart = {
    setup: function( _, ns, handle ) {
        this.addEventListener('touchstart', handle, { passive: !ns.includes('noPreventDefault') });
    }
};
jQuery.event.special.touchmove = {
    setup: function( _, ns, handle ) {
        this.addEventListener('touchmove', handle, { passive: !ns.includes('noPreventDefault') });
    }
};