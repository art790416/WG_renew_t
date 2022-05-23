window.addEventListener('scroll', (e) => {
    let noStickyOffset = document.documentElement.clientHeight * 1
    let scrolled = document.documentElement.scrollTop / noStickyOffset

    let $FV02 = document.querySelector('.FV02')

    $FV02.style.clipPath = `inset(${((0.5 - scrolled) / 0.5) * 100}% 0px 0px 0px)`

    if (scrolled >= 1) {
        document.querySelector('.sticky-container').classList.add('no-sticky')

    } else {
        document.querySelector('.sticky-container').classList.remove('no-sticky')

    }

})