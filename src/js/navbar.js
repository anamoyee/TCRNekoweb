{
  let nav = document.createElement("nav");

  let outer_div = document.createElement("div");
  outer_div.appendChild(nav)

  outer_div.style.display = 'flex';
  outer_div.style.flexDirection = 'row';
  outer_div.style.alignItems = 'center'
  outer_div.style.gap = '10px'

  {
    let div = document.createElement("div");

    div.className = "simple-image-item grower";
    div.id = 'navtails1'

    let img = document.createElement("img");
    img.src = '/assets/img/tails.png';
    img.style.width = '100px'
    img.style.height = '100px';
    div.appendChild(img)

    outer_div.appendChild(div)
  }

  {
    let div = document.createElement("div");

    const navbar_links = [
      ["Strona Główna", "/"],
      ["Galeria", "/-/gallery"],
      ["Materiały", "/-/materialy"],
      ["Media", "/-/media.html"],
      ["Test", "/-/test.html"],
    ]

    navbar_links.forEach(page => {
      const a = document.createElement('a');
      a.textContent = page[0];
      a.className = "grower-link";
      a.href = page[1];
      div.appendChild(a);
    })

    div.className = "navdiv simple-layout-item";
    div.style.display = "flex";
    div.style.flexWrap = "wrap";
    div.style.flexGrow = "1";
    div.style.flexShrink = "100";

    outer_div.appendChild(div);
  }

  {
    let div = document.createElement("div");

    div.className = "simple-image-item grower";
    div.id = 'navtails2'

    let img = document.createElement("img");
    img.src = '/assets/img/tails2.png';
    img.style.width = '100px';
    img.style.height = '100px';
    div.appendChild(img)
    outer_div.appendChild(div)
  }

  outer_div.style.paddingRight = '10px'

  const script = document.currentScript;
  script.parentNode.replaceChild(outer_div, script);
}
