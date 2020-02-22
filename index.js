Kameleoon.API.Core.runWhenConditionTrue(function () {

    console.log(document.querySelector('.ttHeadlineThanksSoftBook'), 'element');
    console.log(window.location.href, 'href');
    return document.querySelector('.ttHeadlineThanksSoftBook');
  }, function () {
      console.log('goal')
    Kameleoon.API.Goals.processConversion(198414);
  });