document.addEventListener('DOMContentLoaded', function() {
    // конечная дата, например 1 июля 2021
    const deadline = new Date(2023, 08, 05, 16);
    // id таймера
    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
      $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
      $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
      $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }
    // получаем элементы, содержащие компоненты даты
    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
  });



  
  const player = document.querySelector('.player')
  const playBtn = document.querySelector('.player__play')
  const pauseBtn = document.querySelector('.player__pause')
  const nextBtn = document.querySelector('.player__next')
  const audio = document.querySelector('.player__audio')
  const title = document.querySelector('.player__title')
  const musicLogo = document.querySelector('.music')
  
  
  // в этот массив вставляем название трека
  const songs = ['Young Fathers - NO WAY', 'Young Fathers - I Heard', 'ЛСП - Белый танец']
  
  
  
  let songIndex = 0
  
  const loadSong = song => {
      title.innerHTML = song
      audio.src = `./audio/${song}.mp3`
  }
  loadSong(songs[songIndex])
  
  const playSong = () => {
    //   musicLogo.classList.add('active__music')
      audio.play()
  }
  
  const pauseSong = () => {
    //   musicLogo.classList.remove('active__music')
      audio.pause()
  }
  
  playBtn.addEventListener('click', () => {
      playSong()
  })
  
  pauseBtn.addEventListener('click', () => {
      pauseSong()
  })
  
  
  const nextSong = () => {
      songIndex ++
  
      if (songIndex > songs.length - 1) {
          songIndex = 0
      }
  
      loadSong(songs[songIndex])
      playSong()
  }
  
  nextBtn.addEventListener('click', () => {
      nextSong()
  })