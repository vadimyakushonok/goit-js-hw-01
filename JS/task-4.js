const quantityDroid = prompt ('Введите количество требуемых дроидов');

const credits = 23580;
const pricePerDroid = 3000;

const totalPrice = quantityDroid * pricePerDroid;
const balance = credits - totalPrice;

const cancelByUser = 'Отменено пользователем!';
const notMoney = 'Недостаточно средств на счету!';
const orderCompleted = `Вы купили ${quantityDroid} дроидов, на счету осталось ${balance} кредитов.`;

let massege;

if (quantityDroid === null) {
    massege = cancelByUser;
} else if (totalPrice > credits) {
    massege = notMoney;
} else {
    massege = orderCompleted;
}

console.log (massege);
