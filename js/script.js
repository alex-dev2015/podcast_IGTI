var inputCurrentFrequency = document.querySelector('#inputCurrentFrequency');
var rangeFrequencies = document.querySelector('#rangeFrequencies');
var divPodcast = document.querySelector('#divPodcast');

function start() {
  rangeFrequencies.addEventListener('input', handleRangeValueChange);
}

function handleRangeValueChange(event) {
  var currentFrequency = event.target.value;
  inputCurrentFrequency.value = currentFrequency + 'Mhz';

  findPodcastFrom(currentFrequency);
}

function findPodcastFrom(frequency) {
  var foundPodcast = null;

  for (var i = 0; i < realPodcasts.length; i++) {
    var currentPodcast = realPodcasts[i];

    if (currentPodcast.id === frequency) {
      foundPodcast = currentPodcast;
      break;
    }
  }

  if (foundPodcast) {
    renderPodcast(foundPodcast);
  } else {
    divPodcast.innerHTML = '<p>Nenhum Podcast encontrado!</p>';
  }

  function renderPodcast(podcast) {
    divPodcast.innerHTML = '';

    var img = document.createElement('img');
    img.src = podcast.img;
    img.alt = 'Podcast' + podcast.title;
    img.title = 'Podcast' + podcast.title;

    divPodcast.appendChild(img);
  }
}

start();
