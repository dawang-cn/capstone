
const userTypes = document.querySelectorAll('.user-type');


userTypes.forEach((container) => {
  container.addEventListener('click', () => {
   
    const selectedUserType = container.querySelector('.staff-desc').textContent;

    localStorage.setItem('userType', selectedUserType);

    window.location.href = 'log-in.html';
  });
});