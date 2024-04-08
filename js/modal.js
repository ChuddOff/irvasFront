export const modals = () => {
    
    function buildModal(headerbutton, modal, close) {
        const headerbuttonmodel = document.querySelector(modal),
            headerbuttonexit = document.querySelector(close);

        function overCreate(event) {
            if (headerbutton.parentElement.parentElement.parentElement.parentElement.classList.contains('.popup_calc_end')) {
                createFet(event, `${modal} div div div form input[name="user_name"]`, `${modal} div div div form input[name="user_phone"]`, `${modal} div div div form p`)
            } else {
                createFetExtensive(event, `${modal} div div div form input[name="user_name"]`, `${modal} div div div form input[name="user_phone"]`, `${modal} div div div form p`)
            }
        }
        
        headerbutton.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }

            const buttonSubmit = document.querySelector(`${modal} div div div form button`);
            if (buttonSubmit) {
                buttonSubmit.addEventListener('click', (event) => {
                    overCreate(event);
                })
            }
                
            document.body.style.overflow = 'hidden';
            headerbuttonmodel.style.display = "block";


            if (localStorage.getItem('type')) {
                Array.from(document.querySelector('.big_img').children)[localStorage.getItem('type')].style.display = 'block';
            }
            if (localStorage.getItem('width')) {
                document.querySelector('#width').value = localStorage.getItem('width');
            }
            if (localStorage.getItem('height')) {
                document.querySelector('#height').value = localStorage.getItem('height');
            }
            if (localStorage.getItem('temp')) {
                document.querySelectorAll('.checkbox')[localStorage.getItem('temp')].checked = true;
            }
            if (headerbutton.classList.contains('popup_calc_btn')) {
                localStorage.setItem('glass', headerbutton.parentElement.parentElement.parentElement.classList.item(1));
            }
            })

        headerbuttonexit.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }
            document.body.style.overflow = '';
            headerbuttonmodel.style.display = "none";

            const buttonSubmit = document.querySelector(`${modal} div div div form button`);
            if (buttonSubmit) {
                buttonSubmit.removeEventListener('click', (event) => {
                    overCreate(event);
                }) 
            }
        })
        headerbuttonmodel.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target === headerbuttonmodel) {
                document.body.style.overflow = '';
                headerbuttonmodel.style.display = "none";

                const buttonSubmit = document.querySelector(`${modal} div div div form button`);
                if (buttonSubmit) {
                    buttonSubmit.removeEventListener('click', (event) => {
                        overCreate(event);
                    })
                }
            }
        })
    }

    function modalTime(modal, t) {
        function overCreate(event) {
            createFet(event, `${modal} div div div form input[name="user_name"]`, `${modal} div div div form input[name="user_phone"]`, `${modal} div div div form p`)
        }
        const headerbuttonmodel = document.querySelector(modal);
        setTimeout(() => {
            document.body.style.overflow = 'hidden';
            headerbuttonmodel.style.display = "block";
            document.querySelector(`${modal} div div div form button`).addEventListener('click', (event) => {
                overCreate(event);
            })
        }, t)
    }

    async function createFet(event, namesel, telsel, noticesel) {
        event.preventDefault();

        const name = document.querySelector(namesel),
            phone = document.querySelector(telsel),
            notice = document.querySelector(noticesel);

        const litePhone = +phone.value.replace(/[\s+-]/g, '')
        // if (isNaN(litePhone)) {
        //     notice.textContent = 'Введёт невалидный номер телефона!'
        //     return
        // }
        if (name.value && phone.value.length == 22) {
            try {
                const fet = await fetch('https://irvas-back-4g64.vercel.app/api/zamer/go', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name.value,
                        tel: phone.value.replace(/\D/g, '')
                    })
                })
                if (fet.ok) {
                    console.log('Успех!');
                    notice.textContent = 'Успешно! Ждите звонка.'
                } else {
                    notice.textContent = 'Осечка! Попробуйте ещё раз.'
                    console.log("Всё не занесено 321")
                }
            }
            catch (e) {
                notice.textContent = 'Осечка! Попробуйте ещё раз.'
                console.log('Ошибка при отправке данных', e);
            }
            name.value = "";
            phone.value = "";
        }
    }

    async function createFetExtensive(event, namesel, telsel, noticesel) {
        event.preventDefault();

        const name = document.querySelector(namesel),
            phone = document.querySelector(telsel),
            notice = document.querySelector(noticesel);

        if (name.value && phone.value.length == 22) {
            try {
                const fet = await fetch('https://irvas-back-4g64.vercel.app/api/zamer/go', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name.value,
                        tel: phone.value.replace(/\D/g, ''),
                        type: localStorage.getItem('type'),
                        width: localStorage.getItem('width'),
                        height: localStorage.getItem('height'),
                        glass: localStorage.getItem('glass'),
                        glass2: localStorage.getItem('glass2')
                    })
                })
                if (fet.ok) {
                    console.log('Успех!');
                    notice.textContent = 'Успешно! Ждите звонка.'
                } else {
                    notice.textContent = 'Осечка! Попробуйте ещё раз.'
                    console.log("Всё не занесено 321")
                }
            }
            catch (e) {
                notice.textContent = 'Осечка! Попробуйте ещё раз.'
                console.log('Ошибка при отправке данных', e);
            }
            name.value = "";
            phone.value = "";
        }
        }
        
    buildModal(document.querySelector('.header_btn_wrap'), '.popup_engineer', '.popup_engineer .popup_close');
    buildModal(document.querySelector('.contact_us_wrap .phone_link'), '.popup', '.popup .popup_close');
    buildModal(document.querySelector('.popup_calc_button'), '.popup_calc_profile', '.popup_calc_profile_close');
    buildModal(document.querySelector('.popup_calc_profile_button'), '.popup_calc_end', '.popup_calc_end_close');
    modalTime('.popup', 60000)

    // const glaz = document.querySelector('.glazing .container').children
    // for (let elNum=2; elNum < glaz.length; elNum++) {
    //     buildModal(`.${glaz[elNum].classList[0]} div:nth-child(1) > div.glazing_price > button`, '.popup_calc', '.popup_calc div div button.popup_calc_close');
    //     if (elNum != 4) {
    //         buildModal(`.${glaz[elNum].classList[0]} div:nth-child(2) div.glazing_price button`, '.popup_calc', '.popup_calc div div button.popup_calc_close');
    //     }
    // }
    document.querySelectorAll('.popup_calc_btn').forEach(el => {
        buildModal(el, '.popup_calc', '.popup_calc div div button.popup_calc_close');
    })

    document.querySelector('main div div div form button').addEventListener('click', (event) => {
        createFet(event, 'main div div div form input[name="user_name"]', 'main div div div form input[name="user_phone"]', `main div div div form p`)
    })

    for (let el of document.querySelector('.decoration_content .row').children) {
        document.querySelector(`.${el.classList} div form button`).addEventListener('click', (event) => {
            createFet(event, `.${el.classList} div form input[name="user_name"]`, `.${el.classList} div form input[name="user_phone"]`, `main div div div form p`)
        })
    }

    document.querySelector('.sale div div div form button').addEventListener('click', (event) => {
        createFet(event, '.sale div div div form input[name="user_name"]', '.sale div div div form input[name="user_phone"]', `main div div div form p`)
    })

    document.querySelector('.popup_calc_end div div div form button').addEventListener('click', (event) => {
        createFet(event, '.popup_calc_end div div div form input[name="user_name"]', '.popup_calc_end div div div form input[name="user_phone"]', `main div div div form p`)
    })

    document.querySelectorAll('input[name="user_phone"]').forEach(el => {
        el.addEventListener('input', (e) => {
            const cusor = e.target.selectionStart;

            const x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
            // e.target.value = x[2] ? '+'+x[1]+' ('+x[2]+') '+x[3]+' - '+x[4]+' - '+x[5] : '+'+x[1];
            
            if (x[4] && x[5].length!=0) {
                e.target.value = '+'+x[1]+' ('+x[2]+') '+x[3]+' - '+x[4]+' - '+x[5]
            }
            else if (x[3] && x[4].length!=0) {
                e.target.value = '+'+x[1]+' ('+x[2]+') '+x[3]+' - '+x[4]
            }
            else if (x[2] && x[3].length!=0) {
                e.target.value = '+'+x[1]+' ('+x[2]+') '+x[3]
            }
            else if (x[1] && x[2].length!=0) {
                e.target.value = '+'+x[1]+' ('+x[2]
            } else {
                e.target.value = '+'+x[1]
            }

            // e.target.setSelectionRange(cusor, cusor);
        })
        el.addEventListener('click', (e) => {
            if (e.target.value == '') {
                e.target.value = '+7'
            }
        })
    })



    const formCover = document.querySelectorAll('.balcon_icons_img'),
          formBig = document.querySelector('.big_img').children;

    formCover.forEach(el => {
        el.addEventListener('click', (e)=> {
            Array.from(formBig).forEach(formEl => {
                formEl.style.display = 'none';
            })
            const index = Array.from(formCover).indexOf(el);
            Array.from(formBig)[index].style.display = 'block';
            localStorage.setItem('type', index);
        })
    })
    const width = document.querySelector('#width'),
          height = document.querySelector('#height'),
          submitButton = document.querySelector('.popup_calc_button'),
          popupProfile = document.querySelector('.popup_calc_profile'),
          popupCalc = document.querySelector('.popup_calc');

    function isNumber(n) {
        return n == n.replace(/\D/g, '');
    }
    submitButton.addEventListener('click', (e) => {
        if (isNumber(width.value) && isNumber(height.value) && width.value && height.value && localStorage.getItem('type')) {
            popupCalc.style.display = 'none';
            localStorage.setItem('width', width.value);
            localStorage.setItem('height', height.value);
        } else {
            popupProfile.style.display = 'none';
        }
    })

    const submitButton2 = document.querySelector('.popup_calc_profile_button'),
          popupEnd = document.querySelector('.popup_calc_end'),
          formControl = document.querySelector('#view_type');
    submitButton2.addEventListener('click', (e) => {
        if (localStorage.getItem('temp')) {
            popupProfile.style.display = 'none';
            localStorage.setItem('glass2', formControl.value);
        } else {
            popupEnd.style.display = 'none'
        }
    })

    const check = document.querySelectorAll('.checkbox-custom'),
          checkRight = document.querySelectorAll('.checkbox');
    check.forEach(el => {
        el.addEventListener('click', (e) => {
            const index = Array.from(check).indexOf(el);
            localStorage.setItem('temp', index);
            checkRight.forEach(el2 => {el2.checked = false});
            checkRight[index].checked = true;
        })
    })
}
