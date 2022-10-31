const menu = document.querySelector('')

if (window.location.hash === '' || window.location.hash === '#home') {
    menu.firstElementChild.classList.add('selected')
} else {
    menu.childNodes.forEach((item) => {
        if (item.firstChild.href === window.location.href) {
            item.classList.add('selected')
        }
    })
}