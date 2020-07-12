const dialog = document.querySelector('.dialog');
const form = document.querySelector('.form');
const text = document.querySelector('.dialog__question');
const closeButton = document.querySelector('.form__close-button');

const dialogClickListener = () => {
    dialog.classList.add('dialog_opened');
    text.classList.add('dialog__question_hidden');
    form.classList.add('form_visible');
    dialog.removeEventListener('click', dialogClickListener)
};

dialog.addEventListener('click', dialogClickListener);

closeButton.addEventListener('click', () => {
    dialog.classList.remove('dialog_opened');
    dialog.classList.add('dialog_closed');

    form.classList.remove('form_visible');
    form.classList.add('form_hidden');
    text.classList.remove('dialog__question_hidden');
    text.classList.add('dialog__question_visible');

    dialog.addEventListener('animationend', () => {
        if (dialog.classList.contains('dialog_closed')) {
            dialog.classList.remove('dialog_closed');
            form.classList.remove('form_hidden');
            text.classList.remove('dialog__question_visible');
            dialog.addEventListener('click', dialogClickListener);
        }
    });

});
