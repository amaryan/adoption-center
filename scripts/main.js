frontcats = [
    '../img/gato4.jpg',
    '../img/gato5.jpg',
    '../img/gato6.jpg',
    '../img/gato4.jpg',
    '../img/gato5.jpg',
    '../img/gato6.jpg'
];

backcats = [
    '../img/gato1-2.jpg',
    '../img/gato2-2.jpg',
    '../img/gato3-2.jpg',
    '../img/gato1-2.jpg',
    '../img/gato2-2.jpg',
    '../img/gato3-2.jpg'
];

$(document).ready(function() {
    $('.center-cats-img img').each(function(index) {
        $(this).hover(function() {
            var context = this;
            setTimeout(function() {
                $(context).attr('src',backcats[index]);
            }, 230);
        }, function () {
            var context = this;
            setTimeout(function() {
                $(context).attr('src',frontcats[index]);
            }, 230);
        });
    });
});