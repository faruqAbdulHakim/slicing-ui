document.addEventListener('DOMContentLoaded', () => {
  const shareBtn = document.querySelector('.share-btn');
  const shareOptions = document.querySelector('.share-options');

  shareBtn.addEventListener('click', () => {
    shareBtn.classList.toggle('active');
    if (shareBtn.classList.contains('active')) {
      shareOptions.classList.remove('hide');
    } else {
      shareOptions.classList.add('hide');
    }
  });
});
