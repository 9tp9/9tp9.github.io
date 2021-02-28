/**
 * Busqueda en la pagina web
 */
$(function(){
    $('form.global-search .search').click(function(event){
        event.preventDefault();
        var page = $(this).parent().find('input[type="text"]').val(),
            redirect = '/';
        
        switch(true){
            case /^(trofeos|trophies)$/.test(page): redirect = '/trofeos/'; break;
            case /^(csgo|cs|counter)$/.test(page): redirect = '/trofeos/csgo/'; break;
            case /^(rocket league|rocket)$/.test(page): redirect = '/trofeos/rocket-league/'; break;
            case /^(sobre nosotros|9tp9|quienes somos|who)$/.test(page): redirect = '/who/'; break;
            case /^(social|redes|redes sociales)$/.test(page): redirect = '/social/'; break;
            default: break;
        }

        window.location.href = redirect;
    });
});
