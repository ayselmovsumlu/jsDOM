"use strict";
$(document).ready(function () {

    $('.btn').click(function (e) {
        e.preventDefault();

        let f = a => {

            for (let i = 1; i <= a; i++) {
                $('.answer').append(`<div class="minibox">${a}</div>`);
            } 
        }

        let d = b => { b*1?  f($('input').val()) : $('.answer').append(`<div class="minibox">${b}</div>`) ;
        }

        d($('input').val())

    });


});