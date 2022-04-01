const formElem = document.querySelector('#form1');
const searchElem = document.querySelector('#form2');
const wordElem = formElem.word;
const translateElem = formElem.translation;
const colorElem = formElem.color;
const resulElem = document.querySelector('#result');

let cadrList = [];

function render(list) {
	cardsElement.innerHTML = '';

	for (let elem of list) {
		const card = document.createElement('div');
		const closeElem = document.createElement('div');
		const h2Elem = document.createElement('p');

		closeElem.addEventListener('click', () => 
			card.remove());

		h2Elem.classList.add('text');
		card.classList.add('card');
		closeElem.classList.add('close');

		card.append(h2Elem, closeElem);
		resulElem.appendChild(card);
		h2Elem.innerText = wordElem.value;
		card.style.backgroundColor = colorElem.value;
		closeElem.innerText = '✖';

		card.addEventListener('dblclick', () => {
			if (h2Elem.innerText == wordElem.value){
				h2Elem.innerText = translateElem.value;
			}else{
				h2Elem.innerText = wordElem.value;
			};
		});
	}
}		

formElem.addEventListener('submit', function (event) {
	event.preventDefault();
	if (cadrList.findIndex((elem) => elem.word === this.word.value) >= 0) {
		alert('Слово уже существует');
		return;
	}
	cadrList.push({
		word: this.word.value,
		translation: this.translation.value,
		color: this.color.value
	});
	render(cadrList);
});

searchElem.addEventListener('submit', function (event) {
	event.preventDefault();
	render(cadrList.filter((elem) => this.search.value === '' || elem.word === this.search.value));
});


