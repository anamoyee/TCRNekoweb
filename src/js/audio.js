AUDIO = false;

if (AUDIO) {
  function choice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  links = [
    'PqQC_gl5k0w',
    '7GIWV__qx4M',
  ]

  iframe =  `<iframe id="autoplayiframe" width="0" height="0" src="https://www.youtube-nocookie.com/embed/` + choice(links) + `//?&amp;;amp;;autoplay=1&amp;;loop=1&amp;;controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>`

  const div = document.createElement("div");
  div.innerHTML = iframe

  div.style.width = '0px';
  div.style.height = '0px';

  const script = document.currentScript;
  script.parentNode.replaceChild(div, script);
}
