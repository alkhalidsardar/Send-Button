		},
		"start"
	);

	tl.to(
		"#paperPlanePath",
		{ duration: 0.15, attr: { fill: "#ffffff" } },
		"start"
	);
	tl.to(
		"#paperPlanePath",
		{ duration: 0.15, attr: { fill: "#4E67E8" } },
		"start+=0.77"
	);
}

function onBtnDown() {
	gsap.timeline({ defaults: { clearProps: true } });
	gsap.to("#base", { duration: 0.1, scale: 0.9, transformOrigin: "50% 50%" });
}

const btn = document.getElementById("base");
btn.addEventListener("mousedown", onBtnDown);
btn.addEventListener("mouseup", onBtnUp);
