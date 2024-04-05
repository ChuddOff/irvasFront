export const modals = () => {
    
    function buildModal(trigger, modal, close) {
        const headerbutton = document.querySelector(trigger),
            headerbuttonmodel = document.querySelector(modal),
            headerbuttonexit = document.querySelector(close);

        
        function overCreate(event) {
            createFet(event, `${modal} div div div form input[name="user_name"]`, `${modal} div div div form input[name="user_phone"]`)
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
            createFet(event, `${modal} div div div form input[name="user_name"]`, `${modal} div div div form input[name="user_phone"]`)
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

    async function createFet(event, namesel, telsel) {
        event.preventDefault();

        const name = document.querySelector(namesel).value,
            phone = document.querySelector(telsel).value;
        if (name && phone) {
            try {
                const fet = await fetch('https://irvas-back-4g64.vercel.app/api/zamer/go', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name,
                        phone
                    })
                })
                if (fet.ok) {
                    console.log('Успех!');
                } else {
                    console.log("Всё не занесено 321")
                }
            }
            catch (e) {
                console.log('Ошибка при отправке данных', e);
            }
        }
        }

    
        
    buildModal('.header_btn_wrap', '.popup_engineer', '.popup_engineer .popup_close');
    buildModal('.contact_us_wrap .phone_link', '.popup', '.popup .popup_close');
    modalTime('.popup', 60000)

    const glaz = document.querySelector('.glazing .container').children
    for (let elNum=2; elNum < glaz.length; elNum++) {
        buildModal(`.${glaz[elNum].classList[0]} div:nth-child(1) > div.glazing_price > button`, '.popup_calc', '.popup_calc div div button.popup_calc_close');
        if (elNum != 4) {
            buildModal(`.${glaz[elNum].classList[0]} div:nth-child(2) div.glazing_price button`, '.popup_calc', '.popup_calc div div button.popup_calc_close');
        }
    }

    document.querySelector('main div div div form button').addEventListener('click', (event) => {
        createFet(event, 'main div div div form input[name="user_name"]', 'main div div div form input[name="user_phone"]')
    })

    for (let el of document.querySelector('.decoration_content .row').children) {
        document.querySelector(`.${el.classList} div form button`).addEventListener('click', (event) => {
            createFet(event, `.${el.classList} div form input[name="user_name"]`, `.${el.classList} div form input[name="user_phone"]`)
        })
    }

    document.querySelector('.sale div div div form button').addEventListener('click', (event) => {
        createFet(event, '.sale div div div form input[name="user_name"]', '.sale div div div form input[name="user_phone"]')
    })

    document.querySelector('.popup_calc_end div div div form button').addEventListener('click', (event) => {
        createFet(event, '.popup_calc_end div div div form input[name="user_name"]', '.popup_calc_end div div div form input[name="user_phone"]')
    })
}