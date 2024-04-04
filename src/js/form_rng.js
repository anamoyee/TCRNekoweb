{
  function choice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  params = (() => {
    var params = {};
    queryString = window.location.search.substring(1);
    var paramArray = queryString.split("&");
    for (var i = 0; i < paramArray.length; i++) {
      var pair = paramArray[i].split("=");
      params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return params;
  })();

  // ---------------------------------------------------------------- //

  let pool = [
    { email: "jan.kowalski", imie: "Jan", nazwisko: "Kowalski" },
    { email: "leonhard.euler", imie: "Leonhard", nazwisko: "Euler" },
    { email: "david.hilbert", imie: "David", nazwisko: "Hilbert" },
    { email: "jeff.bezos", imie: "Jeffrey", nazwisko: "Bezos" },
    { email: "tom@tomscott.com", imie: "Tom", nazwisko: "Scott" },
    { email: "emmet.brown@aol.com", imie: "Emmet", nazwisko: "Brown" },
    { email: "colon@gdcolon.com", imie: "Craig", nazwisko: "Kitsune" },
  ];

  // ---------------------------------------------------------------- //

  let emails = ["gmail.com", "microsoft.sucks", "protonmail.com"];

  // ---------------------------------------------------------------- //

  let IEmail = document.getElementById("email");
  let IImie = document.getElementById("imie");
  let INazwisko = document.getElementById("nazwisko");

  let C = choice(pool);

  if (params.email) {
    IEmail.value = params.email;
  }

  if (params.imie) {
    IImie.value = params.imie;
  }

  if (params.nazwisko) {
    INazwisko.value = params.nazwisko;
  }

  IEmail.placeholder = C.email.indexOf("@") !== -1 ? C.email : `${C.email}@${choice(emails)}`; // prettier-ignore
  IImie.placeholder = C.imie;
  INazwisko.placeholder = C.nazwisko;
}
