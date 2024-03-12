{
  function updateViewportWidth() {
    var width = window.innerWidth;
    document.getElementById('debug').innerHTML =
    `
    width: ${width}
    `.trim().replace('\n', '<br>');
  }
  window.addEventListener('resize', updateViewportWidth);
  updateViewportWidth();
}
