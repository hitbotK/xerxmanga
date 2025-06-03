fetch('data/manga.json')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('manga-list');
    data.manga.forEach(m => {
      const a = document.createElement('a');
      a.href = `manga.html?title=${m.slug}`;
      a.textContent = m.title;
      list.appendChild(a);
      list.appendChild(document.createElement('br'));
    });
  });
