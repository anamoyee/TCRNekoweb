let footer_span = document.createElement("span");
footer_span.className = "text";
footer_span.innerText = `© Copyright Kamil Gondek 2024-present ⋅ Ładowanie liczby Odwiedzających`;

let footer_div = document.createElement("div");
footer_div.appendChild(footer_span);
footer_div.className = "simple-layout-item grower-x-small";
footer_div.id = "outerfooterdiv";

let footer_script = document.currentScript;
footer_script.parentNode.replaceChild(footer_div, footer_script);

const subdomain = window.location.hostname.split('.')[0];

let suffix;
let views;

async function getViews(username){
    const request = await fetch(`https://nekoweb.org/api/site/info/${username}`);
    const json = await request.json();
    return json.views;
}

(async () => {
  if (window.location.host.endsWith('nekoweb.org')){
    views = await getViews(subdomain);
  } else {
    suffix = " (nie na nekoweb.org)"
    views = null
  }

  views ??= "Nie udało się odczytać liczby";

  footer_span.innerText = `© Copyright Kamil Gondek ZSE 2024-present ⋅ ${views} Odwiedzających${suffix ?? ""}`;
})();



