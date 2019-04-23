$('#product_name').prepend(
  BDTLL.locales.utils.get_localized_text('product_name'));
$('#send_feedback').prepend(
  BDTLL.locales.utils.get_localized_text('link_feedback'));
$('#window_title').prepend(
  BDTLL.locales.utils.get_localized_text('extension_name'));
$('#alert_title').prepend(
  BDTLL.locales.utils.get_localized_text('title_blocked'));
$('#proceed_anyway').prepend(
  BDTLL.locales.utils.get_localized_text('alert_ignore'));
$('#BDTLL_go_to_home').prepend(
  BDTLL.locales.utils.get_localized_text('alert_take_to_safety'));
$('#title_whitelist').prepend(
  BDTLL.locales.utils.get_localized_text('title_whitelist'));
$('#text_whitelist').prepend(
  BDTLL.locales.utils.get_localized_text('text_whitelist'));
$('#title_whitelist_submit').prepend(
  BDTLL.locales.utils.get_localized_text('title_whitelist_submit'));
$('#text_whitelist_submit').prepend(
  BDTLL.locales.utils.get_localized_text('text_whitelist_submit'));
$('.submit').prepend(
  BDTLL.locales.utils.get_localized_text('button_whitelist'));

var blockStatus = BDTLL.locales.utils.getParam(
  document.location.search.substring(1), 'status');
if ('PHISHING' === blockStatus) {
  $('#alert_text').prepend(BDTLL.locales.utils.get_localized_text('text_phish'));
} else if ('MALWARE' === blockStatus) {
  $('#alert_text').prepend(BDTLL.locales.utils.get_localized_text('text_malware'));
} else if ('FRAUD' === blockStatus) {
  $('#alert_text').prepend(BDTLL.locales.utils.get_localized_text('text_fraud'));
};
