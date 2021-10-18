const modalWin = document.querySelector('.modal_box');

const main = document.querySelector('.main');

const btn = document.querySelector('.btn');

const close_btn = document.querySelector('.close_btn');

btn.addEventListener('click', () => {
	modalWin.classList.remove('hidden');
	modalWin.classList.add('visible');
	main.classList.remove('main__light');
	main.classList.add('main__dark');
});

close_btn.addEventListener('click', () => {
	main.classList.remove('main__dark');
	main.classList.add('main__light');
	modalWin.classList.add('hidden');
	modalWin.classList.remove('visible');
});
