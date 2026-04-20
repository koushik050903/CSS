document.querySelectorAll('[id^="profile"]').forEach(profile => {
  profile.addEventListener('click', () => {
    document.getElementById('detail-1').classList.add('active');
  });
});

document.getElementById('close').addEventListener('click', () => {
  document.getElementById('detail-1').classList.remove('active');
});