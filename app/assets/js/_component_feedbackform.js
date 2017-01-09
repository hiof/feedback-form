(function(Hiof, undefined) {
  // Setup client information in the view
  //Hiof.view.setupClientInformationInOptions();

  Hiof.setupFeedbackForm = function(ln) {

    $.getJSON("/assets/js/data/i18n.json", function(data) {
      var myData = data[ln]["feedback-form"];

      var clientOptions = Hiof.options.client;

      myData.clientLanguage = ln;
      myData.clientUrl = clientOptions.url;
      myData.clientBrowserName = clientOptions.browserName;
      myData.clientBrowserVersion = clientOptions.browserVersion;
      myData.clientOsName = clientOptions.osName;
      myData.clientOsVersion = clientOptions.osVersion;
      myData.clientViewportWidth = clientOptions.viewportWidth;
      myData.clientViewportHeight = clientOptions.viewportHeight;


      Hiof.appendFeedbackForm(myData);
    });
    //return feedbackForm;
  };
  Hiof.appendFeedbackForm = function(data) {
    let templateSource = Hiof.Templates['forms/feedback'],
    markup = templateSource(data);

    $('#main').append(markup);
    var formHeight = $('.feedback-form').height();
    $('.feedback').css('height', formHeight + 'px');
  };


  //$(function() {
  //    var lang;
  //    if ($('#main').attr('data-page-category') === "page") {
  //
  //        lang = $('html').attr('lang');
  //
  //        Hiof.setupFeedbackForm(lang);
  //
  //    } else if ($('#content').attr('data-page-category') === "page") {
  //        lang = $('html').attr('lang');
  //
  //        Hiof.setupFeedbackForm(lang);
  //    }
  //
  //
  //    $('body').on('submit', '.feedback-form', function(e) {
  //        e.preventDefault();
  //
  //        var formData = $('.feedback-form').serialize();
  //        $.ajax({
  //            url: "http://hiof.no/api/v1/feedback/",
  //            type: "POST",
  //            data: formData,
  //            beforeSend: function() {
  //                $('.feedback-form fieldset').attr('disabled', 'disabled');
  //            },
  //            success: function(data, textStatus, jqXHR) {
  //                //data - response from server
  //                //debug('success:' + data);
  //                $('.feedback-form').slideToggle();
  //                $('.feedback-form-success').slideToggle();
  //            },
  //            error: function(jqXHR, textStatus, errorThrown) {
  //                $('.feedback-form fieldset').prop('disabled', false);
  //                //data - response from server
  //                //debug('error: ' + jqXHR + textStatus + errorThrown);
  //                //debug(textStatus);
  //
  //            }
  //        });
  //
  //
  //    });
  //
  //});

})(window.Hiof = window.Hiof || {});
