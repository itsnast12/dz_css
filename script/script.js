const formElem = document.querySelector('#form1');
const searchElem = document.querySelector('#form2');
const wordElem = formElem.word;
const translateElem = formElem.translation;
const colorElem = formElem.color;
const cardsElement = document.querySelector('#result');

let cadrList = [];

function render(list) {
	cardsElement.innerHTML = '';
	

	for (let elem of list) {
		let card = document.createElement('div');
		let closeElem = document.createElement('div');
		let h2Elem = document.createElement('p');

		closeElem.addEventListener('click', () => 
			card.remove());

		h2Elem.classList.add('text');
		card.classList.add('card');
		closeElem.classList.add('close');
		card.append(h2Elem, closeElem);

		h2Elem.innerText = elem.word;
		card.style.backgroundColor = elem.color;
		closeElem.innerText = '✖';

		card.addEventListener('dblclick', () => {
	   		if (h2Elem.innerText === elem.word) {
	    		h2Elem.innerText = elem.translation;
	  		} else {
	    		h2Elem.innerText = elem.word;
	  		}
  		});
  		cardsElement.append(card);
	}
}		

formElem.addEventListener('submit', function (event) {
	event.preventDefault();
	if (cadrList.findIndex((elem) => elem.word === this.word.value) >= 0) {
		alert('Слово уже существует');
		return;
	}
	cadrList.push({
		word: wordElem.value,
		translation: translateElem.value,
		color: colorElem.value
	});
	render(cadrList);
});

searchElem.addEventListener('submit', function (event) {
	event.preventDefault();
	render(cadrList.filter((elem) => elem.word === this.search.value));
});

