if (typeof jQuery === 'undefined') {
  var script = document.createElement('script');
  script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
  script.onload = onJQuery;
  document.head.appendChild(script);
}

window.onload = async function(){
  if (window.location.host != 'nekoweb.org'){
    const username = 'irc';
    var views = (await fetch(`https://nekoweb.org/api/site/info/${username}`)).json().views;
  } else {
    var views = "Nie udało się odczytać liczby"
  }

  document.getElementById('visitorsCount').innerHTML = views
}

function load(thing){
  $(`#${thing}`)?.load(`/src/html/utils/${thing}.html`);
}

function onJQuery() {
  load('navbar');
  load('footer');
}


