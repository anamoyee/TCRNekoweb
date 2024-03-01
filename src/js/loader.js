if (typeof jQuery === 'undefined') {
  var script = document.createElement('script');
  script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
  script.onload = function() {
      onJQuery();
  };
  document.head.appendChild(script);
}

function load(thing){
  $(`#${thing}`)?.load(`/src/html/utils/${thing}.html`);
}

function onJQuery() {
  load('navbar');
  load('footer');
}
