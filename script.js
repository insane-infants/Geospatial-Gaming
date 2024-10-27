const button = document.getElementById('clickMeButton');

button.addEventListener('mouseover', () => {
  button.innerHTML = 'Click Me &#8594;';
});

button.addEventListener('mouseout', () => {
  button.innerHTML = 'Click Me';
});

// button.addEventListener('click', () => {
//   alert('You clicked the button!');
// });

button.addEventListener('click', () => {
    window.location.href = 'photo.html'; // Replace 'your_target_page.html' with the actual filename
  });

