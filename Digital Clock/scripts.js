function clock(){
	
	const date = new Date();
	let hour = document.querySelector('.hour h3');
	let minute = document.querySelector('.minute h3');
	let second = document.querySelector('.second h3');
	let period = document.querySelector('.period h3');
	let session = "AM";

	if (hour==0){
		hour = 12;
	}

	hour.innerHTML = (date.getHours() <= 9) ? "0" + date.getHours() : date.getHours() + ":";	
	minute.innerHTML = (date.getMinutes() <= 9) ? "0" + date.getMinutes() : date.getMinutes() + ":";
	second.innerHTML = (date.getSeconds() <= 9) ? "0" + date.getSeconds() : date.getSeconds();
	period.innerHTML = (hour <= 12) ? "AM":"PM";

	setTimeout(clock, 1000);
}

clock();


