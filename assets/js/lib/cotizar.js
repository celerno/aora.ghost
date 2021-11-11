let entrada = function(e) {
    e.preventDefault();
    var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $(formCotiza).serializeObject(),
        success: function() {
            try {
                let btn = document.querySelector("#cotiza-form > div > button");
                btn.classList.toggle("is_active");
            } catch (error) {

            }

            if (window.location.href.includes('request-quote') || window.location.href.includes('/en')) {
                window.location.href = "/thank-you";
            } else {
                window.location.href = "/gracias";
            }
        }

    });
}

let formCotiza = $('#cotiza-form'),
    url = 'https://script.google.com/macros/s/AKfycbwkcxG4TDoT0dwGrk7bm2YJRBgZvqHonn7tLkYV-BXtc2Og3i7HYGm9RIOcyCv0suh3cg/exec'
let formContact = $('#contact-form');
if (formContact !== undefined) {
    $(formContact).on('submit', entrada);
}
if (formCotiza !== undefined) {
    $(formCotiza).on('submit', entrada);
}
