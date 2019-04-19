

function getPreviousURL() {
  // var url = document.referrer;
  var url = "";

  if (url == "") {
    url = BDTLL.locales.utils.getParam(document.location.search.substring(1), 'url');
    url = decodeURIComponent(url);
  }

  return url;
}


window.addEventListener("load", function() {
	const shortUrlLength = 50;
	var url = getPreviousURL();

	var shortUrl;
	if (url.length > shortUrlLength) {
		shortUrl = url.substring(0, shortUrlLength) + "...";
	} 
	else {
		shortUrl = url;
	}
	document.getElementById('BDTLL_alert_url').href = url;
	document.getElementById('BDTLL_alert_url').appendChild( document.createTextNode(shortUrl) );
});


BDTLL.locales.utils.init("locales", function () {
	BDTLL.locales.utils.load_script("js/blockedTranslate.js");
});