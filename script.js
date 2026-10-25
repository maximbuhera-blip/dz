const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }));
const reviews = [
 {quote:'За три місяці я не просто стала сильнішою — я нарешті полюбила сам процес. Марк завжди знаходив варіант, який працював саме для мене.',name:'Олена К.',detail:'Персональні тренування · 3 місяці',avatar:'ОК'},
 {quote:'План нарешті вписався у мій робочий графік. Тренування короткі, зрозумілі, а прогрес я відчуваю щотижня.',name:'Андрій П.',detail:'Онлайн-супровід · 5 місяців',avatar:'АП'},
 {quote:'Я прийшла за силою, а отримала ще й впевненість. Марк уважно пояснює кожен рух і завжди підтримує.',name:'Ірина М.',detail:'План тренувань · 4 місяці',avatar:'ІМ'}
];
let index = 0;
function showReview(step) {
 index = (index + step + reviews.length) % reviews.length;
 const review = reviews[index];
 document.querySelector('#quote').textContent = review.quote;
 document.querySelector('#name').textContent = review.name;
 document.querySelector('#detail').textContent = review.detail;
 document.querySelector('#avatar').textContent = review.avatar;
 document.querySelector('#number').textContent = String(index + 1).padStart(2, '0');
}
document.querySelector('#prev').addEventListener('click', () => showReview(-1));
document.querySelector('#next').addEventListener('click', () => showReview(1));
