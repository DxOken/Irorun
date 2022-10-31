const menu = document.querySelector('.nav-bar__list')

if (window.location.hash === '' || window.location.hash === '#home') {
    menu.firstElementChild.classList.add('selected')
} else {
    menu.childNodes.forEach((item) => {
        if (item.firstChild.href === window.location.href) {
            item.classList.add('selected')
        }
    })
}

menu.childNodes.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
        menu.childNodes.forEach((item) => {
            item.classList.remove('selected')
        })
        menuItem.classList.add('selected')
        window.location.replace(menuItem.firstChild.href)

    })
})