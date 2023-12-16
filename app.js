"use strict";
$(document).ready(function () {

    $('.btn').click(function (e) {
        e.preventDefault();

        // let f = a => {

        //     for (let i = 1; i <= a; i++) {
        //         $('.col-md-12').append(a);
        //     } 
        // }

        let d = b => {
            $('.col-md-12').append(b);
        }
        d($('input').val())

    });


});