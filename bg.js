const body = document.querySelector('body'), set = () => {
    body.style.backgroundPositionX = -e.clientX * 0.01 + 'px';
	body.style.backgroundPositionY = -e.clientY * 0.01 + 'px';
};
document.querySelector('html').addEventListener('mousemove', set);
set();
