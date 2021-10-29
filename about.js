console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert("Form has been submitted successfully")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

document.querySelector('img').addEventListener('mouseover', () => {
	alert("You probably make good music")
})