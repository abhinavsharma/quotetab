(function() {
	var quotes = [
		"WHAT WOULD YOU DO IF YOU WEREN'T AFRAID",
		"STAY FOCUSED & KEEP SHIPPING",
		"MOVE FAST AND BUILD THINGS",
		"PROCEED AND BE BOLD",
		"DONE IS BETTER THAN PERFECT",
		"THE MARTIANS ARE COMING TO SAVE THE EARTH"
	];

	var quote = quotes[Math.floor(Math.random()*quotes.length)];
	var inner = document.getElementById("inner");
	inner.innerHTML = quote;
})();
