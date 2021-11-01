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

        clickHandler(btn){
            document.querySelector(btn).addEventListener('click', () => {
                popup.open();
            })
        }
    }


    class Form {
        constructor(form) {
            this.form = document.querySelector(form);
            this.url = 'https://httpbin.org/post';
            this.onSubmit(this.form);
            this.data = [];
        }

        //обработка сабмита
        onSubmit(form) {
            form.addEventListener('submit', e => {
                e.preventDefault();
                if (this.checkInputs(this.form)){
                    this.sendData(this.url).then(console.log)
                    document.querySelectorAll('.js-input').forEach(e => e.value = '');
                    thanks.open();
                    popup.close();
                    this.clearClass('b-popup--done');
                    this.clearClass('b-popup--error');
                }
            });
        }

        sendData(url) {
            return fetch(url, {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        a: 7,
                        str: 'Some string: &=&'
                    })
                }).then(res => res.status)
        }

        
        checkInputs(form) {
            const username = form.querySelector('.js-name');
            const email = form.querySelector('.js-email');

            // чистим от пробелов
            const usernameValue = username.value.trim();
            const emailValue = email.value.trim();

            if (usernameValue === '') {
                this.setErrorFor(username);
                return false;

            } else {
                this.setSuccessFor(username);
            }

            if (emailValue === '') {
                this.setErrorFor(email);
                return false;

            } else if (!this.isEmail(emailValue)) {
                this.setErrorFor(email);
                return false;

            } else {
                this.setSuccessFor(email);
            }

            return true;
        }

        //Создание ошибки
        setErrorFor(input) {
            input.classList.add('b-popup--error');
        }
        //Создание обводки для верного инпута
        setSuccessFor(input) {
            input.classList.add('b-popup--done');
        }

        isEmail(email) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        }

        clearClass(className) {
            document.querySelectorAll('.js-input').forEach(e => e.classList.remove(className));
        }
    }

    const popup = new Modal(document.querySelector('.b-popup[data-type="popup"]'));
    popup.clickHandler('.js-open-modal');
    const thanks = new Modal(document.querySelector('.b-popup[data-type="thanks"]'));
    window.openModal = popup.open.bind(popup);
    const myform = new Form('.js-form-validation');
    window.openModal = thanks.open.bind(thanks);

});