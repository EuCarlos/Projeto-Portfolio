//Menu
$('.menu-btn').on('click', function() {

    var elem = $(this),
        item = $('.menu__item'),
        active = 'is-active',
        play = 'menu__item--play';

    if (  elem.hasClass(active) ) {
        elem.removeClass(active);
        $(item.get().reverse()).each(function(i) {
            var row = $(this);
                setTimeout(function() {
                    row.removeClass(play);
            }, 50*i);
        });
    }

    else {
        elem.addClass(active);
        item.each(function(i) {
            var row = $(this);
                setTimeout(function() {
                    row.addClass(play);
            }, 50*i);
        });
    }

});

// Conectando API das frases

let api = `https://allugofrases.herokuapp.com/frases/random`;
let request = new XMLHttpRequest();
request.open('GET', api);
request.onload = function() {
    let textos = JSON.parse(request.responseText);

    let frase = document.querySelector('#frase');
    frase.innerHTML = textos.frase;

    let livro = document.querySelector('#livro');
    livro.innerHTML = textos.livro;

    let autor = document.querySelector('#autor');
    autor.innerHTML = textos.autor;
};
request.send();