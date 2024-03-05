let navbar_nav = document.createElement("nav");
let navbar_div1 = document.createElement("div");
let navbar_div = document.createElement("div");
navbar_div1.appendChild(navbar_div)

const navbar_links = [
  ["Strona Główna", "index.html"],
  ["Galeria", "src/html/pages/gallery.html"],
  ["Test", "src/html/pages/test.html"],
  ["Test", "src/html/pages/test.html"],
  ["Test", "src/html/pages/test.html"],
]

navbar_links.forEach(page => {
  const navbar_a = document.createElement('a');
  navbar_a.textContent = page[0];
  navbar_a.className = "grower-link";
  navbar_a.href = page[1];
  navbar_div.appendChild(navbar_a);
})

navbar_div.className = "navdiv simple-layout-item grower-x-small grower-noshrink";
navbar_div.style.display = "flex";
navbar_div.style.flexWrap = "wrap";

navbar_nav.appendChild(navbar_div);

const navbar_script = document.currentScript;
navbar_script.parentNode.replaceChild(navbar_nav, navbar_script);
