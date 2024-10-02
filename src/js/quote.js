{
	let script = document.currentScript;
	let previousPreviousQuote;
	let previousQuote;

	function choice(array) {
		const randomIndex = Math.floor(Math.random() * array.length);
		return array[randomIndex];
	}

	// prettier-ignore
	const quote_pool = [
    {text: "<a style='text-decoration: none; text-shadow: none;' href='https://irc.nekoweb.org'>https://irc.nekoweb.org</a> Internet Relay cat :3"},
    {text: "tails/senko/basil/θωθ/•ᴗ•/(*´꒳`*)"},
    {text: "Close your eyes you'll be here soon* 一 二 三 四 五分; 時々 本当に寝たい でも このワードできない おやすみ; おやすみ; おやすみ ;おやすみ"},
    {text: "<code>let yωz = f(y, z) = {x: x ∈ (y∩z) ⋀ x = -1}</code>"},
    {text: "Sometimes the only winning move is not to play"},
    {text: "10.03.2021 <span style='font-style: normal;'>△△△</span>"},
    {text: "We must know, we will know", author: "David Hilbert"},
    {text: "They say you die twice. First when you stop breathing, and second, a bit later on, when somebody says your name for the last time"},
    {text: "🎃 31 OCT = 25 DEC 🎅"},
    {text: "Why worry about anything else when you can have one thing  f o r e v e r"},
    {text: "Access is Power"},
    {text: "<code>\\frac{d❤️}{dt} = a💜<br>\\frac{d💜️}{dt} = -b❤️</code>"},
    {text: "A little bit of an, uh, incident"},
    {text: "Hi! I'm a Python programmer and I like wreaking havoc on school computers :3", author: "Totally not me"},
    {text: "The only true safe house in minecraft is a hidden one", author: "Mumbo Jumbo"},
    {text: "Men are only interested in one thing: mating. Checkmating", author: "Levy Rozman // gotham chess"},
    {text: "The way discord will go down for like 5 minutes and the entire community implodes is so funny to me"},
    {text: "In fact, why didn't English just do a find-and-replace on all the contractions? I'm sure there'dn't've been any problems with that.", author: "Tom Scott"},
    {text: "No matter how kind you are, german kids are always kinder."},
    {text: "20 years ago we had Johnny Cash, Bob Hope & Steve Jobs. Now we have no cash, no hope and no jobs."},
    {text: "Every dead body on Mt. Everest was once a highly motivated person so... maybe calm down."},
    {text: "Privacy is dead enough. We shan't make it more dead that it currently is."},
  ];

	function setTo(q) {
		let text_span = document.createElement("span");

		// h3.style.fontStyle = "italic";
		text_span.style.opacity = 0.7;
		text_span.style.textAlign = "center";
		text_span.style.fontSize = "25px";
		text_span.style.width = "100%";
		text_span.className = "text grower-link clickable-cursor";
		text_span.id = "quotespan";

		previousPreviousQuote = previousQuote ?? choice(quote_pool);
		previousQuote = q;

		if (q.author) {
			text_span.innerHTML = `"<i>${q.text}</i> " ~ ${q.author}`;
		} else {
			text_span.innerHTML = `"<i>${q.text}</i> "`;
		}

		let div = document.createElement("div");
		div.appendChild(text_span);
		div.className = "full-width";
		div.style.width = "100%";
		div.onclick = reroll;
		div.addEventListener("contextmenu", (event) => {
			event.preventDefault();
			back();
		});

		script.parentNode.replaceChild(div, script);
		script = div;
	}

	function reroll(p) {
		setTo(choice(quote_pool));
	}

	function back() {
		setTo(previousPreviousQuote);
	}

	reroll();
}
