! function(d) {
	var c = d.document;
	var a = c.documentElement;
	var b = d.devicePixelRatio;
	var f;
	function e() {
		var h = a.getBoundingClientRect().width,g;
		g = h / 3.75;
		a.style.fontSize = g + "px";
	}

	if (b > 2) {
		b = 3
	} else {
		if (b > 1) {
			b = 2
		} else {
			b = 1
		}
	}
	a.setAttribute("data-dpr", b);
	d.addEventListener("resize", function() {
		clearTimeout(f);
		f = setTimeout(e, 200)
	}, false);
	e()
}(window);