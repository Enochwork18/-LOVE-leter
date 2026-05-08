// ================= STARS =================

function initStars(){

  const starsEl = document.getElementById('stars');

  if(!starsEl) return;

  for(let i = 0; i < 120; i++){

    const s = document.createElement('div');

    s.className = 'star';

    const size = Math.random() * 2.5 + 0.5;

    s.style.cssText = `
      left:${Math.random() * 100}%;
      top:${Math.random() * 100}%;

      width:${size}px;
      height:${size}px;

      animation-duration:${Math.random() * 3 + 1.5}s;
      animation-delay:${Math.random() * 3}s;
    `;

    starsEl.appendChild(s);
  }
}

// ================= PETALS =================

function initPetals(){

  const petalsEl = document.getElementById('petals');

  if(!petalsEl) return;

  for(let i = 0; i < 18; i++){

    const p = document.createElement('div');

    p.className = 'petal';

    p.style.cssText = `
      left:${Math.random() * 100}%;

      animation-duration:${Math.random() * 6 + 5}s;
      animation-delay:${Math.random() * 8}s;

      transform:rotate(${Math.random() * 360}deg);

      width:${Math.random() * 8 + 8}px;
      height:${Math.random() * 12 + 10}px;
    `;

    petalsEl.appendChild(p);
  }
}

// ================= PHOTOS =================

const photos = [

  {
    src:'Snapchat-695293383.jpg',
    caption:'The pout that started everything 😏'
  },

  {
    src:'Snapchat-1299161064.jpg',
    caption:'Glasses & the peace sign 🤍'
  },

  {
    src:'Snapchat-363811885.jpg',
    caption:'Moody & magnetic 🌚'
  },

  {
    src:'Snapchat-1346830605.jpg',
    caption:'She wears a tie and wins 🖤'
  },

  {
    src:'Snapchat-791287002.jpg',
    caption:'The one that silenced me 🌸'
  },

  {
    src:'Snapchat-945642693.jpg',
    caption:'That smile... yeah I’m done 💗'
  },

  {
    src:'WhatsApp Image 2026-05-08 at 12.21.38 PM.jpeg',
    caption:'Even looking away she stuns 🌹'
  }

];

// ================= PLACEHOLDER =================

function getPlaceholderImage(){

  const canvas = document.createElement('canvas');

  canvas.width = 240;
  canvas.height = 240;

  const ctx = canvas.getContext('2d');

  const gradient = ctx.createLinearGradient(
    0,
    0,
    240,
    240
  );

  gradient.addColorStop(0, '#c8445a');
  gradient.addColorStop(1, '#f7c5d0');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 240, 240);

  ctx.fillStyle = '#ffffff';

  ctx.font = 'bold 60px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  ctx.fillText('💗', 120, 120);

  return canvas.toDataURL();
}

// ================= IMAGE URL =================

function getImageUrl(path){

  if(!path){
    return getPlaceholderImage();
  }

  return path;
}

// ================= SCREEN =================

function showScreen(id){

  document
    .querySelectorAll('.screen')
    .forEach(screen => {
      screen.style.display = 'none';
    });

  const el = document.getElementById(id);

  if(el){

    el.style.display = 'flex';

    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  }
}

// ================= ENVELOPE =================

function openEnvelope(){

  const env = document.getElementById('envelope');

  env.classList.add('open');

  document
    .getElementById('musicPlayer')
    .classList.remove('hidden');

  musicOn = true;

  playMusic();

  const toggle = document.getElementById('musicToggle');

  if(toggle){
    toggle.textContent = '⏸';
  }

  setTimeout(() => {

    buildGallery();

    showScreen('screen-gallery');

  }, 800);
}

// ================= BUILD GALLERY =================

function buildGallery(){

  const grid = document.getElementById('photoGrid');

  grid.innerHTML = '';

  photos.forEach((ph, i) => {

    const card = document.createElement('div');

    card.className = 'photo-card';

    card.style.animationDelay = `${i * 0.1}s`;

    const img = document.createElement('img');

    img.src = getImageUrl(ph.src);

    img.alt = ph.caption;

    img.loading = 'lazy';

    img.onerror = () => {
      img.src = getPlaceholderImage();
    };

    const overlay = document.createElement('div');

    overlay.className = 'photo-overlay';

    overlay.textContent = ph.caption;

    card.appendChild(img);
    card.appendChild(overlay);

    grid.appendChild(card);
  });
}

// ================= TRANSITIONS =================

function showLetter(){
  showScreen('screen-letter');
}

function showQuestion(){

  showScreen('screen-question');

  resetNoButton();
}

function showYes(){

  showScreen('screen-yes');

  launchConfetti();
}

function showNo(){
  showScreen('screen-no');
}

// ================= NO BUTTON =================

let noMoves = 0;

function resetNoButton(){

  noMoves = 0;

  const noBtn = document.getElementById('noBtn');

  if(noBtn){

    noBtn.style.transform = 'translate(0,0)';
    noBtn.style.opacity = '1';
    noBtn.style.pointerEvents = 'auto';
    noBtn.style.transition = 'none';
  }
}

function runAwayNo(btn){

  if(noMoves >= 5) return;

  noMoves++;

  const max = 120;

  const x = (Math.random() - 0.5) * max * 2;
  const y = (Math.random() - 0.5) * max * 2;

  btn.style.transform = `translate(${x}px, ${y}px)`;

  btn.style.transition = 'transform .3s ease';

  if(noMoves >= 5){

    btn.style.opacity = '.1';
    btn.style.pointerEvents = 'none';
  }
}

// ================= CONFETTI =================

function launchConfetti(){

  const container = document.getElementById('confetti');

  if(!container) return;

  container.innerHTML = '';

  const colors = [
    '#c8445a',
    '#f7c5d0',
    '#d4a853',
    '#ffffff',
    '#8b1a2e',
    '#f9dde5'
  ];

  for(let i = 0; i < 80; i++){

    const piece = document.createElement('div');

    piece.className = 'confetti-piece';

    piece.style.cssText = `
      left:${Math.random() * 100}%;

      background:
      ${colors[Math.floor(Math.random() * colors.length)]};

      animation-duration:${Math.random() * 3 + 2}s;
      animation-delay:${Math.random() * 2}s;

      transform:rotate(${Math.random() * 360}deg);

      width:${Math.random() * 8 + 6}px;
      height:${Math.random() * 14 + 8}px;

      border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
    `;

    container.appendChild(piece);
  }
}

// ================= MUSIC =================

let musicOn = false;

function toggleMusic(){

  musicOn = !musicOn;

  const toggle = document.getElementById('musicToggle');

  if(toggle){

    toggle.textContent = musicOn
      ? '⏸'
      : '▶';
  }

  if(musicOn){

    playMusic();

  }else{

    stopMusic();
  }
}

function playMusic(){

  const audio = document.getElementById('bgMusic');

  if(audio){

    audio.src =
      'Sleep Token - Caramel-yt.savetube.me 2.mp3';

    audio.volume = 0.3;

    audio.play()
      .catch(err =>
        console.log('Audio error:', err)
      );
  }
}

function stopMusic(){

  const audio = document.getElementById('bgMusic');

  if(audio){

    audio.pause();

    audio.currentTime = 0;
  }
}

// ================= INIT =================

document.addEventListener(
  'DOMContentLoaded',
  function(){

    initStars();

    initPetals();

    showScreen('screen-envelope');
  }
);

// ================= SHORTCUT =================

document.addEventListener(
  'keydown',
  function(e){

    if(
      e.code === 'Space' &&
      document
        .getElementById('screen-envelope')
        .style.display !== 'none'
    ){

      e.preventDefault();

      openEnvelope();
    }
  }
);