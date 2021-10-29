let askBtn = document.querySelectorAll(".askBtn");

let handleSubmit = evt => {
	evt.preventDefault();
	alert(`My favorite ${evt.target.id} is ${evt.target.value}`)
}

for (let i = 0; i < askBtn.length; i++) {
    askBtn[i].addEventListener('click', handleSubmit)
};
