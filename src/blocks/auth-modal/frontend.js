document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.querySelectorAll('.open-modal')
    const modalEl = document.querySelector(
        '.wp-block-udemy-plus-auth-modal'
    )
    const modalCloseEl = document.querySelectorAll(
        '.modal-overlay, .modal-btn-close'
    )
    const tabs = document.querySelectorAll('.tabs a')
    const signinForm = document.querySelector('#signin-tab')
    const signupForm = document.querySelector('#signup-tab')

    openModalBtn.forEach(el => {
        el.addEventListener('click', event => {
            event.preventDefault()
            modalEl.classList.add('modal-show')            
        })
    })

    modalCloseEl.forEach(el => {
        el.addEventListener('click', event => {            
            event.preventDefault()
            modalEl.classList.remove('modal-show')            
        })
    })    

    tabs.forEach(tab => {

        tab.addEventListener('click', event => {
            event.preventDefault();
            
            tabs.forEach(currentTab => {
                currentTab.classList.remove('active-tab')
            })

            event.currentTarget.classList.add('active-tab');

            const activeTab = event.currentTarget.getAttribute('href')

            if(activeTab === '#signin-tab'){
                signinForm.style.display = 'block'                
                signupForm.style.display = 'none' 
            } else {
                signinForm.style.display = 'none'                
                signupForm.style.display = 'block' 
            }

        })

    })

    signupForm.addEventListener('submit', event => {
        event.preventDefault() //stops redirection of form

        const signupFieldset = signupForm.querySelector('fieldset')
        
        signupFieldset.setAttribute('disabled', true)

        const signupStatus = signupForm.querySelector('#signup-status')
        
        signupStatus.innerHTML = `<div class="modal-status modal-status-info">
           Please wait, we are creating your account!
        </div>`


    })
});


