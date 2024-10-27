const button = document.getElementById('clickMeButton');

button.addEventListener('mouseover', () => {
  button.innerHTML = 'Click Me &#8594;';
});

button.addEventListener('mouseout', () => {
  button.innerHTML = 'Click Me';
});

button.addEventListener('click', () => {
  alert('You clicked the button!');
});

button.addEventListener('click', () => {
    window.location.href = 'photo.html'; // Replace 'your_target_page.html' with the actual filename
  });

const b2 = document.getElementById('b2');


b2.addEventListener('mouseover', () => {
    button.innerHTML = 'Click Me &#8594;';
  });
b2.addEventListener('click', () => {
    window.location.href = 'index.html'; // Replace 'new_page.html' with the actual filename
});