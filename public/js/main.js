$(function(){
    $('.games .game').click(function(){
        var game = $(this).data().name;
        window.location.href = `9tp9.github.io/trofeos/${game}/`;
    });
});