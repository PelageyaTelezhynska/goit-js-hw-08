import Vimeo from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);
const TIME_DATA = 'videoplayer-current-time';

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
  localStorage.setItem(TIME_DATA, JSON.stringify(data));
}

function pageUpdate() {
  try {
    if (localStorage.length !== 0) {
      const currentTime = localStorage.getItem(TIME_DATA);
      const savedCurrentTime = JSON.parse(currentTime);
      player.setCurrentTime(savedCurrentTime.seconds);
    }
  } catch (error) {
    console.log(error);
  }
}

pageUpdate();
