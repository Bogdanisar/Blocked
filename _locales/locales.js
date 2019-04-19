if (typeof(BDTLL) == "undefined") {
  BDTLL = {};
}

if (typeof(BDTLL["locales"]) == "undefined") {
  BDTLL["locales"] = {};
}


BDTLL.locales.utils = BDTLL.locales.utils || (function() {
  // Localization variables generated during build using information from
  // configuration file
  var default_locale = "en_US";
  var supported_languages = new Set(['cs', 'de', 'el', 'en_US', 'es', 'fr', 'it', 'ja', 'ko', 'nl', 'pl', 'pt_BR', 'pt_PT', 'ro']);

  function BDTLL_get_browser_locale() {
    var LANG = (navigator.language).toLowerCase().substr(0, 2);

    if (false === supported_languages.has(LANG)) {
      return default_locale;
    }

    return LANG;
  }

  function get_localized_text(key) {
    try {
      var locale = BDTLL_get_browser_locale();
      var mstring = "__undefined__"
      try {
        mstring = BDTLL.locales.store[locale][key].message;
      } catch (err) {
        mstring = BDTLL.locales.store[default_locale][key].message;
      }
      return mstring;
    } catch (err) {
      return "__localization_error__";
    }
  }

  function load_script(src, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.async = false;
    script.defer = false;
    
    script.onload = callback;

    script.src = src;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  function init(localePath, callback) {
    var locale = BDTLL_get_browser_locale();
                                              
    if (locale != "en") {
      load_script(localePath + "/" + default_locale + "/" + "i18n.js", function() {});
      load_script(localePath + "/" + locale + "/" + "i18n.js", callback);
    }
    else {
      load_script(localePath + "/" + locale + "/" + "i18n.js", callback);
    }
  }

  return {
    default_locale: default_locale,
    BDTLL_get_browser_locale: BDTLL_get_browser_locale,
    get_localized_text: get_localized_text,
    init: init,
    load_script: load_script
  }
})();
