function showSection(sectionId) {
  document.getElementById('mind').style.display = 'none';
  document.getElementById('tools').style.display = 'none';
  document.getElementById('logs').style.display = 'none';
  document.getElementById(sectionId).style.display = 'block';
}

function saveMindset() {
  const input = document.getElementById('mindsetInput').value;
  localStorage.setItem('mindset', input);
  document.getElementById('savedMindset').textContent = "🧠 Saved: " + input;
}

function saveLog() {
  const log = document.getElementById('logInput').value;
  localStorage.setItem('dailyLog', log);
  document.getElementById('savedLog').textContent = "📓 Saved: " + log;
}

window.onload = () => {
  const mindset = localStorage.getItem('mindset');
  const log = localStorage.getItem('dailyLog');
  if (mindset) document.getElementById('savedMindset').textContent = "🧠 Saved: " + mindset;
  if (log) document.getElementById('savedLog').textContent = "📓 Saved: " + log;
};
