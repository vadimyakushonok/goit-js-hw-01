const contryName = prompt ('Введите название страны для расчета стоимости доставки');

const China = 'Китай';
const Chili = 'Чили';
const Australia = 'Австралия';
const India = 'Индия';
const Jamaica = 'Ямайка';

let message;
let price;
let country;

const cancelByUser = 'Отменено пользователем!';
const noDelivery = 'В вашей стране доставка не доступна';
/* const orderCompleted = `Доставка в ${contry} будет стоить ${price} кредитов`; */

if (contryName === null) {
    alert(cancelByUser);
} else { 
    country = contryName[0].toUpperCase() + contryName.slice(1).toLowerCase(); 
    switch (country) {
            case China:
                price = 100;
                break;
    
            case Chili:
                price = 250;
                break;
    
            case Australia:
                price = 170;
                break;
    
            case India:
                price = 80;
                break;
    
            case Jamaica:
                price = 120;
                break;
                
            default:
                alert (noDelivery);
    }
  }

  if (price > 0) {
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
  }
  
  console.log(message); 