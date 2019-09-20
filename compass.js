const direction = document.getElementById('degree');

var lastAlpha = 0;

function deviceOrientationListener(event) {
	var alpha = Math.round(event.alpha);

	// If we've moved by more than a degree, send compass data
	if (alpha != lastAlpha) {
		lastAlpha = alpha;
		SendCompassDataToUnity(alpha);
	}
}

if (window.DeviceOrientationEvent) {
	window.addEventListener('deviceorientation', deviceOrientationListener);
}
