var btn = document.querySelector('#right_col_peck > div.peck-status > div.peck-cdn');
if (btn) {
	function eat() {
		var click = document.createEvent('MouseEvents');
		click.initEvent('click', true, true);
		btn.dispatchEvent(click);
	}

	if (btn.innerText === "领取") {
		eat();
	}

	/*var text = btn.innerText;
	btn.innerText = "自动领取ing...";
	Object.defineProperty(btn, "innerText", {
		get: function () {
			return text;
		},
		set: function (value) {
			text = value;
			if (value === "领取") {
				eat();
			}
		}
	});*/

	setInterval(function() {
		if (btn.innerText === "领取") {
			eat();
		}
	}, 1000);
}
