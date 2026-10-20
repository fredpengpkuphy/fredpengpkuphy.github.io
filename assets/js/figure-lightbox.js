(() => {
  const dialog = document.getElementById('figure-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;

  const image = dialog.querySelector('.figure-dialog__image');
  const caption = dialog.querySelector('.figure-dialog__caption');
  const closeButton = dialog.querySelector('.figure-dialog__close');
  let trigger = null;

  document.querySelectorAll('.publication-figure > a').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      trigger = link;
      image.src = link.href;
      image.alt = link.querySelector('img')?.alt || 'Research figure';
      caption.textContent = link.closest('figure')?.querySelector('figcaption')?.textContent.replace(/\s*Click to enlarge\.\s*$/, '') || '';
      dialog.showModal();
      closeButton.focus();
    });
  });

  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    image.removeAttribute('src');
    trigger?.focus();
  });
})();
