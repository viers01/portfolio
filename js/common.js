document.addEventListener("DOMContentLoaded", function (event) {
    class Modal {
        constructor(overlay) {
            this.overlay = overlay;

            const closeButton = overlay.querySelector('.b-popup__close');
            closeButton.addEventListener('click', this.close.bind(this));

            overlay.addEventListener('click', e => {
                if (e.target == overlay) {
                    this.close();
                }
            });
        }
        open() {
            this.overlay.classList.remove('b-popup--hidden');
            document.querySelector('html').style.overflow = "hidden";
        }
        close() {
            this.overlay.classList.add('b-popup--hidden');
            document.querySelector('html').style.overflow = null;
        }

    }
    const popup = new Modal(document.querySelector('.b-popup'));
    window.openModal = popup.open.bind(popup);
    document.querySelector('.js-open-modal').addEventListener('click', () => {
        window.openModal();
    })

    const form = document.querySelector('.js-form-validation')
    const validateBtn = form.querySelector('.js-validation-btn')
    const email = form.querySelector('.js-email')
    const name = form.querySelector('.js-name')
    const inputs = form.querySelectorAll('.js-input')
    url = 'http://example.com/movies.json';
    form.addEventListener('submit', function (event) {
        let isValid = false;

            event.preventDefault()
            inputs.forEach(e => {
            e.classList.remove('b-popup--error');
        })

        for (var i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                inputs[i].classList.add('b-popup--error')
                isValid = false;
            } else {
                fetch(url, {
                    method: 'post',
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                    },
                    body: JSON.stringify('data') // Отправка поля формы
                })
                .then(alert('done'))
            }
        }
    })
});