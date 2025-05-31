const API_KEY = '09e72cf0b4d631ab14e95688bab47448'; // Replace with your OpenWeatherMap API key

document.getElementById('weatherForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const city = document.getElementById('cityInput').value;
  const resultDiv = document.getElementById('weatherResult');

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    document.getElementById('cityName').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('temp').textContent = data.main.temp;
    document.getElementById('humidity').textContent = data.main.humidity;
    document.getElementById('wind').textContent = data.wind.speed;

    resultDiv.classList.remove('hidden');
  } catch (error) {
    resultDiv.classList.add('hidden');
    alert(error.message);
  }
});

