async function loadStations() {
  const response = await fetch('streams.json');
  const stations = await response.json();

  const select = document.getElementById('stationList');
  const player = document.getElementById('player');

  stations.forEach(station => {
    const option = document.createElement('option');
    option.value = station.url;
    option.textContent = station.title;
    select.appendChild(option);
  });

  // Play first station by default
  player.src = stations[0].url;

  select.addEventListener('change', () => {
    player.src = select.value;
    player.play();
  });
}
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}

loadStations();