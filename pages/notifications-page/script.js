const markReadBtn = document.querySelector('header button');
const unreadNotif = document.querySelectorAll('.notif-item.unread');

markReadBtn.addEventListener('click', () => {
  for (const notif of unreadNotif) {
    notif.classList.remove('unread');
  }
});
