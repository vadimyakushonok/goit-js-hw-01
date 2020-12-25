let userPassword = prompt ('Введите пароль');

const ADMIN_PASSWORD = 'jqueryismyjam';

const cancelByUser = 'Отменено пользователем!';
const welcomeUser = 'Добро пожаловать!';
const wrongPassword = 'Доступ запрещен, неверный пароль!'

let message;

if (userPassword === null) {
    message = cancelByUser;
} else if (userPassword === ADMIN_PASSWORD) {
    message = welcomeUser;
} else {
    message = wrongPassword;
}

alert (message);