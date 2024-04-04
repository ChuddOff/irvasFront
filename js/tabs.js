export const tabs = () => {
    function opencortab(tabsel, cortab, plus) {
        const tabselector = document.querySelector(tabsel);
        for(let el of tabselector.children) {
            el.style.display = 'none';
        }
        if (plus) {
            for (let i = 0; i < plus; i++) {
                Array.from(tabselector.children)[i].style.display = 'block';
            }
        }
        Array.from(tabselector.children)[cortab + plus].style.display = 'block';
    }
    function opentab(headers, tabs, plus = 0) {
        const header = document.querySelectorAll(headers);
        header.forEach(el => {
            el.addEventListener('click', (e) => {
                header.forEach(el2 => {
                    el2.firstElementChild.classList.remove('after_click')
                })
                el.firstElementChild.classList.add('after_click')
                opencortab(tabs, Array.from(header).indexOf(el), plus);
            })
        })

    }
    opentab('.decoration_item', '.decoration_content .row')
    opentab('.glazing_block', '.glazing .container', 2)
}