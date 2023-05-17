import Player from '@vimeo/player';
import { throttle } from 'lodash';


const iframe = document.getElementById("vimeo-player");
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

const onPlay = function(time) {
localStorage.setItem(STORAGE_KEY, time.seconds);
}

player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);


const updateTimeThrottle = throttle(onPlay, 1000);
player.on('timeupdate', updateTimeThrottle);
