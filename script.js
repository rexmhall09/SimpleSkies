let airportData = {};

const defaultSuggestions = ['JFK', 'LHR', 'JFK', 'NHR'];

function showSuggestions(inputValue) {
		let suggestions = '<div class="suggestions-container">';

		if (!inputValue) {
				defaultSuggestions.forEach(code => {
						if (airportData[code]) { // Ensure the default suggestion exists in the data
								suggestions += `<div class="suggestion-item" onclick="selectSuggestion('${code}')">${code}</div>`;
						}
				});
		} else {
				let count = 0;
				const maxSuggestions = 5;
				for (const code in airportData) {
						if (code.startsWith(inputValue.toUpperCase())) {
								suggestions += `<div class="suggestion-item" onclick="selectSuggestion('${code}')">${code}</div>`;
								if (++count >= maxSuggestions) break;
						}
				}
		}
		suggestions += '</div>';
		document.getElementById('suggestions').innerHTML = suggestions;
}

document.getElementById('findInfo').addEventListener('click', function() {
		const airportCode = document.getElementById('airportInput').value.toUpperCase();
		const info = airportData[airportCode];
		if (info) {
				displayAirportInfo(info);
		} else {
				document.getElementById('airportInfo').innerHTML = '<span style="color: red;">Airport code not found in our database.</span>';
		}
		hideSuggestions();
});

function displayAirportInfo(info) {
		const infoDiv = document.getElementById('airportInfo');
		const safeText = (text) => text || "N/A"; // Helper function to return "N/A" if text is falsy
		let websiteHTML = safeText(info.website);

		// Check if website is not "N/A" before creating a link
		if (info.website && info.website !== "N/A") {
				websiteHTML = `<a href="${safeText(info.website)}" target="_blank">${safeText(info.website)}</a>`;
		}

		infoDiv.innerHTML = `
				<strong>Name:</strong> ${safeText(info.name)}<br>
				<strong>Location:</strong> ${safeText(info.location)}<br>
				<strong>Elevation:</strong> ${safeText(info.elevation)} ft<br>
				<strong>Icao Code:</strong> ${safeText(info.icao)}<br>
				<strong>Iata Code:</strong> ${safeText(info.iata)}<br>
				<strong>Timezone:</strong> ${safeText(info.timezone)}<br>
				<strong>Website:</strong> ${websiteHTML}
		`;
}


function hideSuggestions() {
		document.getElementById('suggestions').innerHTML = '';
}

const airportInput = document.getElementById('airportInput');
airportInput.addEventListener('input', function() {
		showSuggestions(airportInput.value);
});

// Load airport data from data.json
fetch('data.json')
		.then(response => response.json())
		.then(data => {
				airportData = data;
				showSuggestions(''); // Show default suggestions after loading data
		})
		.catch(error => console.error('Error loading airport data:', error));

function selectSuggestion(value) {
		airportInput.value = value;
		hideSuggestions();
		document.getElementById('findInfo').click();
}

function toggleMode() {
	const currentTheme = document.getElementById('theme-stylesheet').getAttribute('href');
	const newTheme = currentTheme === 'dark.css' ? 'light.css' : 'dark.css';
	document.getElementById('theme-stylesheet').setAttribute('href', newTheme);
	const themeToggleImage = document.getElementById('themeToggle').querySelector('img');
	themeToggleImage.src = newTheme === 'dark.css' ? '/img/changetheme-dark.png' : '/img/changetheme-light.png';
}

document.getElementById('themeToggle').addEventListener('click', toggleMode);

