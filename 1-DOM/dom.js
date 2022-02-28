function manipulateDom() {
    const elements = document.getElementsByClassName('quote');
    for(var i in elements) {
        elements[i].classList.add('queryBlue')
    }
};

export { manipulateDom };