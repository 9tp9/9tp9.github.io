$(function(){
    $('.games .game').click(function(){
        var game = $(this).data().name;
        window.location.href = `9tp9.github.io/trofeos/${game}/`;
    });

    $('.owl-carousel').owlCarousel({
        loop            : true,
        margin          : 10,
        responsiveClass : true,
        responsive      : {
            0 : {
                items : 1,
                nav : true
            },
            600 : {
                items : 3,
                nav : false
            },
            1000 : {
                items : 5,
                nav : true,
                loop : false
            }
        }
    }); 
});