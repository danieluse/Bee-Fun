// Получаем элементы модальных окон
var ageModal = document.getElementById("ageModal");
var cookieModal = document.getElementById("cookieModal");

// Получаем кнопки закрытия
var closeAgeModal = document.getElementById("closeAgeModal");
var closeCookieModal = document.getElementById("closeCookieModal");

// Получаем кнопки действия
var confirmAge = document.getElementById("confirmAge");
var acceptCookies = document.getElementById("acceptCookies");

// Открытие модального окна для возраста
window.onload = function() {
    ageModal.style.display = "block"; // Показываем модальное окно для возраста
    cookieModal.style.display = "block"; // Показываем модальное окно для cookies
};

// Закрытие модального окна для возраста
closeAgeModal.onclick = function() {
    ageModal.style.display = "none";
};

// Закрытие модального окна для cookies
closeCookieModal.onclick = function() {
    cookieModal.style.display = "none";
};

// Закрытие модального окна для возраста при подтверждении возраста
confirmAge.onclick = function() {
    ageModal.style.display = "none";
};

// Закрытие модального окна для cookies при принятии
acceptCookies.onclick = function() {
    cookieModal.style.display = "none";
};

// Закрытие модального окна, если кликнуть вне его
window.onclick = function(event) {
    if (event.target == ageModal) {
        ageModal.style.display = "none";
    }
    if (event.target == cookieModal) {
        cookieModal.style.display = "none";
    }
};


  
  let score = 0;

function getRandomFlower() {
    const flowers = ['🌼', '🌸', '🌷']; // Цветы для слотов
    return flowers[Math.floor(Math.random() * flowers.length)];
}

function spinSlots() {
    const slot1 = document.getElementById('slot1');
    const slot2 = document.getElementById('slot2');
    const slot3 = document.getElementById('slot3');

    slot1.innerText = getRandomFlower();
    slot2.innerText = getRandomFlower();
    slot3.innerText = getRandomFlower();

    checkForWin(slot1.innerText, slot2.innerText, slot3.innerText);
}

function checkForWin(flower1, flower2, flower3) {
    if (flower1 === flower2 && flower2 === flower3) {
        score += 2; // Выигрыш в два раза больше
        document.getElementById('score').innerText = score;
        alert('Вы выиграли! Получили в два раза больше!');
    }
}

document.getElementById('lever').addEventListener('click', spinSlots);
