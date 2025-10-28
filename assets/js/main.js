
// ====== Configurable links (EDIT THESE) ======
const PRETEST_URL = 'https://forms.gle/QuSSyCQXhxciyytdA'; // ganti dengan link Google Form pretest
const POSTTEST_URL = 'https://forms.gle/fiWw4Ep3obDHhNmu7'; // ganti dengan link posttest
const WA_NUMBER = '6285759721211'; // format internasional tanpa +

// ====== App init ======
document.addEventListener('DOMContentLoaded', () => {
  // Inject links
  const pre = document.getElementById('pretest-link'); if (pre) pre.href = PRETEST_URL;
  const post = document.getElementById('posttest-link'); if (post) post.href = POSTTEST_URL;
  const wa = document.getElementById('wa-konselor'); if (wa) wa.href = `https://wa.me/${WA_NUMBER}?text=Halo%20Bu%2FPa%20Bidan%2C%20saya%20butuh%20konsultasi%20ASI`;

  // App version
  const verEl = document.getElementById('app-version');
  if (verEl) verEl.textContent = '1.0.0';

  // Register service worker for PWA
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(console.error);
  }

  // Quiz scoring
  const quiz = document.getElementById('quiz-form');
  if (quiz) {
    quiz.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputs = Array.from(quiz.querySelectorAll('input[type=radio]'));
      const groups = [...new Set(inputs.map(i => i.name))];
      let score = 0, total = groups.length;
      groups.forEach(name => {
        const checked = quiz.querySelector(`input[name="${name}"]:checked`);
        if (checked && checked.dataset.correct === '1') score++;
      });
      const res = document.getElementById('quiz-result');
      res.classList.remove('hidden');
      res.innerHTML = `<strong>Skor:</strong> ${score}/${total}. ${score === total ? 'Hebat!' : 'Tetap semangat, pelajari lagi modulnya ya.'}`;
      // Save locally
      try {
        localStorage.setItem('quiz_score', JSON.stringify({score, total, at: new Date().toISOString()}));
      } catch {}
      window.scrollTo({top:0, behavior:'smooth'});
    });
  }
});
