<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P83KPRW');</script>
<!-- End Google Tag Manager -->

<script>
/* Expandable List Functionality */

//Wrap the text of each dt in a button and assign aria values
$(document).ready(function() {
    $('.expandable-list dt').each(function(index) {
        $(this).wrapInner( '<button aria-controls="item-' + (index + 1) + '" aria-expanded="false"><span></span></button>' );
        $(this).next('.expandable-list dd').attr('id', 'item-' + (index + 1));
    });

    $('.expandable-list dt').click(function(e) {
        e.preventDefault();
        // Add the open class to the clicked dt and corresponding dd
        $(this).toggleClass('open').next('.expandable-list dd').toggleClass('open');
        //Change the aria-expanded attribute from 'true' to 'false' or 'false' to 'true'
        $(this).children('button').attr('aria-expanded', function(i, origValue) {
            if (origValue == 'true') {
                return 'false';
            } else {
                return 'true';
            };
        });
        //Slide
        if ( $(this).hasClass('open')) {
            $(this).next('.expandable-list dd').slideDown();
        } else {
            $(this).next('.expandable-list dd').slideUp();
        };
    });

    //Adjust width of expandable list based on TOC state
    function checkTocState() {
        if ($('#mt-toc-container .mt-toggle').hasClass('mt-toggle-collapse')) {
            $('dl.expandable-list').addClass('toc-avoid');
        } else {
            $('dl.expandable-list').removeClass('toc-avoid');
        };
    }

    checkTocState();
    $('#mt-toc-container .mt-toggle').click(function () {checkTocState()});

/* Expandable List Expand/Collapse All Button */
    //Create the button before each list
    $('<div class="expand-button"><a class="toggle-all"></a></div>').insertBefore('dl.expandable-list');
    $('a.toggle-all').text('Expand/Collapse All');

    //On click
    $("a.toggle-all").on("click", function(e) {
        e.preventDefault();
        let target = $(e.target);
        let targetDL = target.parent().next('.expandable-list');
        //Count the number of items and the number of open items
        let openItems = targetDL.children('dt.open');
        let allItems = targetDL.children('dt');
        //If less than half of the items are open, open all. Otherwise, close all items.
        targetDL.children('dt').toggleClass('open', openItems.length <= allItems.length/2);
        targetDL.children('dd').toggleClass('open', openItems.length <= allItems.length/2);
        //If the dt has a class of open, change the button aria-expanded attribute to true.
        //Otherwise, change it to false.
        if ($('.expandable-list dt').hasClass('open')) {
            $('.expandable-list dt button').attr('aria-expanded', 'true');
            $('.expandable-list dt').next('.expandable-list dd').slideDown();
        } else {
            $('.expandable-list dt button').attr('aria-expanded', 'false');
            $('.expandable-list dt').next('.expandable-list dd').slideUp();
        };
    });
});
</script>

<script>
$(document).ready(function () {
$('.mt-feedback-consent-checkbox').closest('.mt-field').remove();
$('.elm-pdf-export a').attr('title','Printer friendly page');
$('body.columbia-article-topic-qpinternadotreleases .mt-article-pagination, body.columbia-article-topic-qpexternaldotreleases .mt-article-pagination, body.columbia-article-topic-releasenotes .mt-article-pagination').show();

//$('input.mt-help.mt-inputredirect-input.ui-dform-input, input.mt-text.mt-search.search-field').addClass('data-hj-whitelist');
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

<script type="text/javascript">
    window._mfq = window._mfq || [];
    (function() {
        var mf = document.createElement("script");
        mf.type = "text/javascript"; mf.async = true;
        mf.src = "//cdn.mouseflow.com/projects/13a9ca41-9816-41cf-ac46-aa5cb3326741.js";
        document.getElementsByTagName("head")[0].appendChild(mf);
    })();
</script>

<script>
$(document).ready(function () {


        $(".mt-lp-progress-bar li").each(function(i) {
            $(this).append('<div class="number">' + (++i) + "</div>");
        });

        $(document).on("click", ".mt-lp-progress-bar li .number", function() {
            $(this).closest('li').find('a')[0].click();
        });

        $('.mt-lp-progress-bar li .number').hover(function() {
            $(this).closest('li').find('span').toggleClass('j-border');
        });



        $(".mt-lp-progress-bar").each(function(i) {
            $('.mt-lp-progress-container').insertBefore('h1#title');
            $(".mt-lp-progress-bar").before('<p class="desktop-verb">You are viewing a collection of pages. Click the numbered circles to navigate between pages or click the previous/next article titles.</p>', '<p class="mobile-verb">You are viewing a collection of pages. Click the circles to navigate between pages or click the previous/next article titles.</p>');
            $('.mt-lp-path-meta-data').prependTo('.mt-lp-progress-container');
            $(".mt-lp-path-meta-data .mt-lp-progress-description").html($(".mt-lp-path-meta-data .mt-lp-progress-description").html().replace("step", "page"));
        });






//$("#mt-search-container #mt-help-results input.input-text").attr("placeholder", "Search our resources");
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
    if ($('aside#mt-toc-container button').hasClass('mt-toggle-collapse')) {
        //do something
        $('aside#mt-toc-container').addClass('hh-collapsed');
    }
    else if (!$('aside#mt-toc-container button').hasClass('mt-toggle-collapse')) {
        $('aside#mt-toc-container').removeClass('hh-collapsed');
    }

$(document).on('click', 'aside#mt-toc-container button.mt-toggle', function () {
    if ($('aside#mt-toc-container button').hasClass('mt-toggle-collapse')) {
        //do something
        $('aside#mt-toc-container').addClass('hh-collapsed');
    }
    else if (!$('aside#mt-toc-container button').hasClass('mt-toggle-collapse')) {
        $('aside#mt-toc-container').removeClass('hh-collapsed');
    }
});


});


  $(document).ajaxComplete(function () {
      $('.mt-search-carousel-container.mt-search-carousel-widget').closest('#mt-help-results').find('.mt-carousel-helper-text').hide();

  });

</script>
<script>
/* Checklist Functionality to Retain Checks */
window.addEventListener('DOMContentLoaded', function() {
    //Selects all checkboxes and puts them in an array
    const boxes = document.querySelectorAll('#todo-list input'),
          boxesArray = Array.prototype.slice.call(boxes),
          //Get the pathname of the URL
          pathname = window.location.pathname;

    //Put any stored data into the variable checks
    if (localStorage[pathname]) {
        let checks = JSON.parse(localStorage.getItem(pathname));
        //Iterate through checks
        Object.keys(checks).forEach(function(key) {
            //Set the value of the checked attribute on each box
            //equal to the value stored in checks at the same index
            let val = checks[key];
            boxes[key].setAttribute('checked', val);
        });
    };

    //Empty object to collect data
    let boxStatus = {};
    //Iterate through boxesArray
    boxesArray.forEach(function(box, index) {
        //If the box is checked, create a boxStatus entry with a value of true
        if (box.checked == true) {
            boxStatus[index] = true;
        };
        //Listen for clicks on each checkbox
        box.addEventListener('click', function() {
            //If you check the box, the boxStatus value is equal to true
            //If you uncheck a box, the boxStatus value is equal to undefined
            if (box.checked == true) {
                boxStatus[index] = true;
            } else {
                boxStatus[index] = undefined;
            };
            //Store the new value
            localStorage.setItem(pathname, JSON.stringify(boxStatus));
        });
    });

    let resetButton = document.querySelectorAll('.reset-checklist'),
        resetButtonArray = Array.prototype.slice.call(resetButton);
    //Add listener to reset button
    resetButtonArray.forEach(function(button) {
        button.addEventListener('click', function() {
        //Uncheck each box and empty boxStatus
            boxesArray.forEach(function(box, index) {
                box.checked = false;
                boxStatus = {}
            });
        //Remove the article path from localStorage
        localStorage.removeItem(pathname);
        });
    });
});
</script>
