



btnSuccess.addEventListener('click', () => {
    oui.classList.toggle('is-hidden')
    non.classList.toggle('is-hidden')
})



function verifyEmail() {
    let btnSubmit = document.querySelector('#btnSubmit')
    let emailInput = document.querySelector('#email')

    let successIcon = document.querySelector('#successIcon')

    let suc = document.querySelector('#suc')
    let wrong = document.querySelector('#wrong')

    if (emailInput.value.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi)) {

        emailInput.classList.add('is-success')
        emailInput.classList.remove('is-danger')
        successIcon.classList.remove('is-hidden')
        successIcon.classList.add('has-text-success')
        successIcon.classList.remove('has-text-danger')
        suc.classList.remove('is-hidden')
        wrong.classList.add('is-hidden')
        return true
    } else {
        emailInput.classList.remove('is-success')
        emailInput.classList.add('is-danger')
        successIcon.classList.remove('is-hidden')
        successIcon.classList.add('has-text-danger')
        wrong.classList.remove('is-hidden')
        suc.classList.add('is-hidden')
        return false
    }

}


function verification() {
    if (verifyEmail()) {
        let oui = document.querySelector('#oui');
        let non = document.querySelector('#non');
        oui.classList.remove('is-hidden');
        non.classList.add('is-hidden');
    }
}
