var formCotiza = $('#cotiza-form'),
    url = 'https://script.google.com/macros/s/AKfycbwkcxG4TDoT0dwGrk7bm2YJRBgZvqHonn7tLkYV-BXtc2Og3i7HYGm9RIOcyCv0suh3cg/exec'

$(formCotiza).on('submit', function(e) {
    e.preventDefault();
    var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $(formCotiza).serializeObject(),
        success: function() {
            let btn = document.querySelector("#cotiza-form > div > button");
            btn.classList.toggle("is_active");
            if (window.location.href.includes('cotizar')) {
                window.location.href = "/gracias";
            } else {
                window.location.href = "/thank-you";
            }
        }

    });
});
