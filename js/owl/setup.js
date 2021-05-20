$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        //quantidade de itens a serem apresentados por tamanho da tela
        // 0:{
        //     items:1
        // },
        600:{
            items:3
        },
        1000:{
            items:8
        }
    }
})