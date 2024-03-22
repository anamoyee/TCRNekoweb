{
  iframe = `<iframe width="0" height="0" src="https://www.youtube-nocookie.com/embed/gA64971fisI//?&amp;;amp;;autoplay=1&amp;;loop=1&amp;;controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>`

  const div = document.createElement("div");
  div.innerHTML = iframe

  const script = document.currentScript;
  script.parentNode.replaceChild(div, script);
}
