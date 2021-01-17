const contryName = prompt ('Введите название страны для расчета стоимости доставки');

const CHINA = 'Китай';
const CHILI = 'Чили';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';

let message;
let price;
let country;

const cancelByUser = 'Отменено пользователем!';
const noDelivery = 'В вашей стране доставка не доступна';

if (contryName === null) {
    alert(cancelByUser);
} else { 
    country = contryName[0].toUpperCase() + contryName.slice(1).toLowerCase(); 
    switch (country) {
            case CHINA:
                price = 100;
                break;
    
            case CHILI:
                price = 250;
                break;
    
            case AUSTRALIA:
                price = 170;
                break;
    
            case INDIA:
                price = 80;
                break;
    
            case JAMAICA:
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