const divs = Array.from(document.querySelectorAll('div'));

divs.forEach((div) => {
  div.addEventListener('click', () => {
    alert('hello');
  });
});