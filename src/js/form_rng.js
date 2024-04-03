{
  function choice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  // ---------------------------------------------------------------- //

  let pool = [
    { email: "jan.kowalski", imie: "Jan", nazwisko: "Kowalski" },
    { email: "leonhard.euler", imie: "Leonhard", nazwisko: "Euler" },
    { email: "david.hilbert", imie: "David", nazwisko: "Hilbert" },
    { email: "jeff.bezos", imie: "Jeffrey", nazwisko: "Bezos" },
    { email: "tom@tomscott.com", imie: "Tom", nazwisko: "Scott" },
    { email: "emmet.brown@aol.com", imie: "Emmet", nazwisko: "Brown" },
  ];

  // ---------------------------------------------------------------- //

  let emails = ["gmail.com", "microsoft.sucks", "protonmail.com"];

  // ---------------------------------------------------------------- //

  let IEmail = document.getElementById("email");
  let IImie = document.getElementById("imie");
  let INazwisko = document.getElementById("nazwisko");

  let C = choice(pool);

  IEmail.placeholder = C.email.indexOf("@") !== -1 ? C.email : `${C.email}@${choice(emails)}`; // prettier-ignore
  IImie.placeholder = C.imie;
  INazwisko.placeholder = C.nazwisko;
}
