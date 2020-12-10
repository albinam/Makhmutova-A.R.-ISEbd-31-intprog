const form = document.forms[0];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const values = [...new FormData(form).values()];
    console.log(values);

    if (!checkIfNotNull(values[0])) return showMessage('error', 'Заполните поле ФИО');
    if (!checkPhone(values[1])) return showMessage('error', 'Неверно введен номер телефона');
    if (!checkIfNotNull(values[2])) return showMessage('error', 'Заполните поле адрес');

    showMessage('success', 'Заказ оформлен');
});

function checkPhone(phone) {
    var reg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    return phone != "" && reg.test(phone);
}

function checkIfNotNull(str) {
    return str !== '';
}

function showMessage(type, text) {
    Swal.fire({
        text: text,
        icon: type,
        showConfirmButton: false
    });
}