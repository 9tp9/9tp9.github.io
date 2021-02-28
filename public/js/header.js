/**
 * Busqueda en la pagina web
 */
$(function(){
    $('form.global-search .search').click(function(event){
        event.preventDefault();
        var page = $(this).parent().find('input[type="text"]').val(),
            redirect = '9tp9.github.io';
        
        switch(true){
            case /^(trofeos|trophies)$/.test(page): redirect = '9tp9.github.io/trofeos/'; break;
            case /^(csgo|cs|counter)$/.test(page): redirect = '9tp9.github.io/trofeos/csgo/'; break;
            case /^(rocket league|rocket)$/.test(page): redirect = '9tp9.github.io/trofeos/rocket-league/'; break;
            case /^(sobre nosotros|9tp9|quienes somos|who)$/.test(page): redirect = '9tp9.github.io/who/'; break;
            case /^(social|redes|redes sociales)$/.test(page): redirect = '9tp9.github.io/social/'; break;
            default: break;
        }

        window.location.href = redirect;
    });
});