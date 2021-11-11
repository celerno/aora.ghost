let entrada = function(e) {
    e.preventDefault();
    let datos = $(e.target).serializeObject();
    $.ajax({
        url: url,
        method: "POST",
        dataType: "json",
        data: datos,
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
    url = 'https://script.google.com/macros/s/AKfycbx9SzVs8TlqIWwjY8xtiVUGmQ-Ksb4nw4IJUAgZfzTS5Gp4UjzKGet941Kc3XcUumn1ag/exec'
let formContact = $('#contact-form');
if (formContact !== undefined) {

    $(formContact).on('submit', entrada);
}
if (formCotiza !== undefined) {
    $(formCotiza).on('submit', entrada);
}
