// Basic interactivity: year, copy checklist, giant animation
document.getElementById('year').textContent = new Date().getFullYear();

const copyBtn = document.getElementById('copyBtn');
const copyMsg = document.getElementById('copyMsg');
copyBtn.addEventListener('click', async () => {
  const text = document.getElementById('quickText').innerText;
  try {
    await navigator.clipboard.writeText(text);
    copyMsg.textContent = 'Đã sao chép vào clipboard!';
    setTimeout(()=> copyMsg.textContent = '', 3000);
  } catch (e) {
    copyMsg.textContent = 'Không thể sao chép tự động — vui lòng copy thủ công.';
  }
});

// Giant animation (simple)
const giant = document.getElementById('giantAnim');
const play = document.getElementById('playGiant');
const stop = document.getElementById('stopGiant');
let giantTimer = null;

play.addEventListener('click', ()=> {
  if(giantTimer) return;
  let dir = 1;
  giantTimer = setInterval(()=> {
    // sway and move
    const t = (Math.random()*8 + 2) * dir;
    giant.style.transform = `translateX(${t}px) rotate(${t/8}deg)`;
    dir *= -1;
  }, 700);
});

stop.addEventListener('click', ()=> {
  clearInterval(giantTimer);
  giantTimer = null;
  giant.style.transform = 'none';
});
