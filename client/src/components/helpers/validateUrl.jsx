function validateUrl(url) {
  // http or https or localhost url pattern
  var regex = /^(http|https|localhost)/;
  return regex.test(url);
}

export default validateUrl;
