function validateUrl(url) {
    // http or https url pattern
    var regex =
        /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.][a-z0-9]+)*\.[a-z]{2,}(:[0-9]{1,5})?(\/.*)?$/;

  return regex.test(url);
}

export default validateUrl;