// DA MODIFICARE INTERAMENTE

const music = new Audio();
let currentTrack = 0;
let playing = false;

// Assicuriamoci che `playlist` sia definita (caricata da playlist.js prima di questo file)
if (Array.isArray(playlist) && playlist.length > 0) {
  music.src = playlist[currentTrack];
} else {
  music.src = "";
}

// Mostra toast
function showToast(msg){
  let toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(()=>toast.classList.add('show'),50);
  setTimeout(()=>{
    toast.classList.remove('show');
    setTimeout(()=>toast.remove(),300);
  },3000);
}

// Play specific track by index (gestisce wrap-around)
function playTrack(index){
  if (!Array.isArray(playlist) || playlist.length === 0) return;
  currentTrack = ((index % playlist.length) + playlist.length) % playlist.length;
  music.src = playlist[currentTrack];
  music.currentTime = 0;
  music.volume = 0.1;
  music.play().then(()=>{
    playing = true;
    showToast("🎵 Ora in riproduzione: " + playlist[currentTrack].split('/').pop().replace(/\.[^/.]+$/, ""));
  }).catch(err=>{
    console.log('Playback error:', err);
  });
}

// Quando finisce una traccia, avvia la successiva
music.addEventListener('ended', ()=> playTrack(currentTrack + 1));

  // Avvia la musica al primo gesto dell'utente (click o tasto) — necessario per le policy autoplay
  function handleFirstGesture(){
    if (!playing) playTrack(currentTrack);
  }
  globalThis.addEventListener('click', handleFirstGesture, { once: true });
  globalThis.addEventListener('keydown', handleFirstGesture, { once: true });