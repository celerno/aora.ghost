let entrada = function(e) {
    e.preventDefault();
    var intereses = e.target.elements['intereses'];
    if (intereses !== undefined) {
        intereses.value += ' | ';
        this.querySelectorAll('[type="checkbox"]:checked').forEach(chk => {
            intereses.value += chk.value + ' | ';
        });
    }
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
                console.log(error);
                window.location.href = 'mailto:hello@aora.agency';
            }

            if (window.location.href.includes('request-quote') || window.location.href.includes('/en')) {
                window.location.href = "/thank-you";
            } else {
                window.location.href = "/gracias";
            }
        }

    });
}

$('form').on('submit', entrada);
