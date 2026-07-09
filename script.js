// ---------- Ambient floating hearts in the background ----------
const heartField = document.getElementById('heartField');
const HEART_COUNT = 18;

for (let i = 0; i < HEART_COUNT; i++) {
  const heart = document.createElement('span');
  heart.className = 'ember-heart';
  heart.innerHTML = '&#10084;';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (10 + Math.random() * 14) + 'px';
  heart.style.setProperty('--drift', (Math.random() * 80 - 40) + 'px');
  heart.style.animationDuration = (9 + Math.random() * 10) + 's';
  heart.style.animationDelay = (Math.random() * 12) + 's';
  heartField.appendChild(heart);
}

// ---------- Envelope open -> reveal letter ----------
const envelope = document.getElementById('envelope');
const openBtn = document.getElementById('openBtn');
const sealView = document.getElementById('sealView');
const letterView = document.getElementById('letterView');

function openLetter() {
  envelope.classList.add('open');
  setTimeout(() => {
    sealView.style.display = 'none';
    letterView.classList.add('show');
  }, 550);
}

envelope.addEventListener('click', openLetter);
openBtn.addEventListener('click', openLetter);

// ---------- "Blow out the candle" surprise ----------
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseLine = document.getElementById('surpriseLine');

const surpriseMessages = [
  'Make a wish — I already know it involves me. 😉',
  'Here\'s to another year of us. 🥂',
  'You + me, always the best chapter. 📖'
];

surpriseBtn.addEventListener('click', () => {
  const msg = surpriseMessages[Math.floor(Math.random() * surpriseMessages.length)];
  surpriseLine.textContent = msg;
  surpriseLine.classList.remove('show');
  // retrigger fade-in
  void surpriseLine.offsetWidth;
  surpriseLine.classList.add('show');
});
