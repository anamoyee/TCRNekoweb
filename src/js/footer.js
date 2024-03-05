let footer_span = document.createElement("span");
footer_span.className = "text";
footer_span.innerText = `© Copyright Kamil Gondek 2024-present ⋅ Ładowanie liczby Odwiedzających`;

let footer_div = document.createElement("div");
footer_div.appendChild(footer_span);
footer_div.className = "simple-layout-item grower-x-small";
footer_div.id = "outerfooterdiv";

let footer_script = document.currentScript;
footer_script.parentNode.replaceChild(footer_div, footer_script);

if (window.location.host == 'nekoweb.org'){
  const username = 'irc';
  var views = fetch(`https://nekoweb.org/api/site/info/${username}`).json().views;
} else {
  var suffix = " (nie na nekoweb.org - nie można pobierac liczb odwiedzających)"
  var views = "Nie udało się odczytać liczby"
}

views ??= "Nie udało się odczytać liczby"

footer_span.innerText = `© Copyright Kamil Gondek 2024-present ⋅ ${views} Odwiedzających${suffix ?? ""}`;
