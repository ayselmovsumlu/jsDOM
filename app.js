"use strict";
$(document).ready(function () {

    $('.btn').click(function (e) {
        e.preventDefault();
        if (!$.trim($('input').val()) == '') {
            let f = a => {
                for (let i = 0; i < a; i++) { $('.answer').append(`<div class="minibox"><h3>${a}</h3></div>`); }
            }
            let d = b => Number(b) ? f(b) : $('.answer').append(`<div class="minibox"><h3>${b}</h3></div>`);

            d($('input').val());
        }
        $('input').val('');

    });


});