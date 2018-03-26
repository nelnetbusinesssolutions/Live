<script>
$(document).ready(function () {
$('input.mt-help.mt-inputredirect-input.ui-dform-input, input.mt-text.mt-search.search-field').addClass('data-hj-whitelist');
});
<!-- Hotjar Tracking Code for www.nbshubhelp.com -->
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:698438,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>

<script>
$(document).ready(function () {
$("#mt-search-container #mt-help-results input.input-text").attr("placeholder", "Search our resources");
    $('.mt-toggle-container nav em:contains("No headers")').closest('.mt-toggle-container').css('display', 'none');

var $placeholder = $('main header nav .elm-nav-container ol li .mt-quick-search-container.mt-toggle-form-container form input');
$placeholder.attr('placeholder', 'Search this section');
$('body.columbia-special-search,  body.columbia-page-special').find($placeholder).attr('placeholder', 'Search the site');

//$('#mt-site-search-input').attr('placeholder','Search this category');
        //  $('.noindex .mt-toggle-collapse').trigger('click');



    $('ol li.elm-back-to-top a').attr('href', 'javascript:void(0);');

    $(document).on('click', 'ol li.elm-back-to-top a', function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    window.onscroll = function () {
        var pageOffset = document.documentElement.scrollTop || document.body.scrollTop;
        if (pageOffset >= 300) {
            $('.mt-icon-back-to-top').removeClass('back').addClass('move');
        } else {
            $('.mt-icon-back-to-top').removeClass('move').addClass('back');
        }
    };
   $('.mt-search-carousel-container.mt-help-invisible').closest('#mt-help-results').find('.mt-carousel-helper-text').hide();
});


  $(document).ajaxComplete(function () {
      $('.mt-search-carousel-container.mt-search-carousel-widget').closest('#mt-help-results').find('.mt-carousel-helper-text').hide();

  });

</script>
