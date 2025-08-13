function loadSection(file) {
    fetch(file)
      .then(response => response.text())
      .then(html => {
          document.getElementById('content').innerHTML = html;
          document.querySelectorAll('section').forEach(s => s.classList.add('active'));
      })
      .catch(err => console.error('Error loading section:', err));
}
