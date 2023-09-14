import './style.css';

fetch('https://script.google.com/macros/s/AKfycbzMst-i609In4F6gqRhW8mLJvCgJ9uMsL8SNblTqObMUqyq0WvExQerbxlbRPn_gZZvsg/exec')
	.then((response) => response.json())
	.then((res) => {
		console.log(res.data);
		const { data } = res;
		const resultContainer = document.getElementById('resultContainer');
		data.forEach((item) => {
			const card = document.createElement('div');
			card.className = 'card';
			const name = document.createElement('h2');
			name.className = 'card-name';
			name.textContent = item.names;
			const hours = document.createElement('p');
			hours.className = 'card-hours';
			hours.textContent = `Horas: ${item.hours}`;
			card.appendChild(name);
			card.appendChild(hours);
			resultContainer.appendChild(card);
		});
	})
	.catch((error) => console.log(error));
