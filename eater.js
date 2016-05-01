var rightColPeck = document.querySelector('#right_col_peck');
var peckCdn = rightColPeck.querySelector('.peck-status .peck-cdn');
if (peckCdn) {
	(function() {
		if (rightColPeck.style.display === "block") {
			if (peckCdn.innerText === "领取") {
				var click = document.createEvent('MouseEvents');
				click.initEvent('click', true, true);
				peckCdn.dispatchEvent(click);
			}
			requestAnimationFrame(arguments.callee);
		} else {
			setTimeout(arguments.callee, 1000);
		}
	})();
}
