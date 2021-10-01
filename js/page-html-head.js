< !--SmartLook -->
<script type='text/javascript'>
  window.smartlook||(function(d) {
    var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
    var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
    c.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';h.appendChild(c);
    })(document);
    smartlook('init', 'f78fcb0302f7a79b9d471904cb52d113fc5c127a');
</script>
<script>
fetch('https://www.nbshubhelp.com/@api/deki/users/current?dream.out.format=json')
.then(response => response.json())
.then(json => {
    var userId = json['@id'];
    var userName = json['fullname'];
    if (json.groups) {
        var userGroup = json.groups.group.groupname || json.groups.group[0].groupname;
        var userGroup2 = Array.isArray(json.groups.group) && json.groups.group.length > 1 ? json.groups.group[1].groupname : undefined;
    }
    smartlook('identify', userId, {
        'name': userName,
        'group': userGroup,
        'group2': userGroup2
    });
});
</script>
<!--End SmartLook-- >

< !--Google Tag Manager-- >
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P83KPRW');</script>
<!--End Google Tag Manager-- >

<script src="https://cdn.jsdelivr.net/npm/shepherd.js@5.0.1/dist/js/shepherd.js"></script>

<script>
function createVideoReuseButton(videoLink, videoLinkText) {
    //If video is being used as content reuse
    if ($('.mt-contentreuse-widget .mt-video-widget').length && !$('body.columbia-article-topic-video').length) {
        //Add a button at the top of the article
        $('#section_1').before('<div><a class="hh-btn video-btn" "mt-self-link" href="' + videoLink + '">' + videoLinkText + '</a><br /></div>');
    }   
}
</script>
<script>
/*Expandable List: Simple */
$(function() {
    //Expand/Collapse All Button for Expandable List: Simple*/
    $('dl.expand').each(function(i, el) {
        if ($(el).find('dt.expand').length > 1) {
            $(el).addClass('pluralexpander');
        }
    });
    $('<div class="expand-button"><a class="toggle-all"></a></div>').insertBefore('dl.expand.pluralexpander');
    $('a.toggle-all').text('Expand/Collapse All');

    //On click
    $("a.toggle-all").on("click", function(e) {
        e.preventDefault();
        let target = $(e.target);
        let targetDL = target.parent().next('.expand');
        //Count the number of items and the number of open items
        let openItems = targetDL.children('dt.open');
        let allItems = targetDL.children('dt');
        //If less than half of the items are open, open all. Otherwise, close all items.
        targetDL.children('dt').toggleClass('open', openItems.length <= allItems.length/2);
        targetDL.children('dd').toggleClass('open', openItems.length <= allItems.length/2);
        //If the dt has a class of open, change the button aria-expanded attribute to true.
        //Otherwise, change it to false.
        if (targetDL.children('dt').hasClass('open')) {
            targetDL.children('.expand dt button').attr('aria-expanded', 'true');
            targetDL.children('.expand dt').next('.expand dd').slideDown();
        } else {
            targetDL.children('.expand dt button').attr('aria-expanded', 'false');
            targetDL.children('.expand dt').next('.expand dd').slideUp();
        };
    });
    
    //Add button around text in each dt. Add aria attributes to button and dd.
    $('.expand dt').each(function(index) {
        $(this).wrapInner( '<button aria-controls="item-' + (index + 1) + '" aria-expanded="false"><span></span></button>' );
        $(this).next('.expand dd').attr('id', 'item-' + (index + 1));
    });
    
    //Add/remove open class on click
    $('.expand dt').click(function(e) {
        e.preventDefault();
        // Add the open class to the clicked dt and corresponding dd
        $(this).toggleClass('open').next('.expand dd').toggleClass('open');
        if ( $(this).hasClass('open')) {
            $(this).children('button').attr('aria-expanded', 'true');
            $(this).next('.expand dd').slideDown();
        } else {
            $(this).children('button').attr('aria-expanded', 'false');
            $(this).next('.expand dd').slideUp();
        };
    });
    
});
</script>
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
    $('dl.expandable-list').each(function(i, el) {
        if ($(el).find('dt').length > 1) {
            $(el).addClass('pluralexpander');
        }
    });
    $('<div class="expand-button"><a class="toggle-all"></a></div>').insertBefore('dl.expandable-list.pluralexpander');
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
        if (targetDL.children('.expandable-list dt').hasClass('open')) {
            targetDL.children('.expandable-list dt button').attr('aria-expanded', 'true');
            targetDL.children('.expandable-list dt').next('.expandable-list dd').slideDown();
        } else {
            targetDL.children('.expandable-list dt button').attr('aria-expanded', 'false');
            targetDL.children('.expandable-list dt').next('.expandable-list dd').slideUp();
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
</script>


<script>
$(document).ready(function () {
    //Styling sign in page
        if ($('.columbia-special-userlogin').length) {
            $('.columbia-special-userlogin .mt-login-skin-template').insertBefore('#SpecialUserlogin');
            $('.columbia-special-userlogin .input-text').after('<p class="login-instructions">Contact the <a href="mailto:nbsmindtouch@nelnet.net" class="blue4">site admin <span class="mt-icon-newtab">\<\/\s\p\a\n\>\<\/\a\> if you do not recall your username.</p>');
            $('.columbia-special-userlogin #widget-login-panel #password-password').after('<p class="login-instructions">Click the Password reset tab if you do not recall your password.</p>');
            $('.columbia-special-userlogin .widget-panel').append('<p class="browsers">Supported browsers: <br />IE 11, IE Edge, Chrome, Firefox, Safari</p>');
        }

        $(".mt-lp-progress-bar li").each(function(i) {
            $(this).find('.mt-icon-progress-indicator').append('<div class="number">' + (++i) + "</div>");
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
/*** Creating tooltips for each page settings classification ***/

window.addEventListener('DOMContentLoaded', function() {
if (document.querySelector('#mt-summary')) {
function PageSettingTooltip (name, id) {
    //Name and id are used for selecting elements
    this.name = name;
    this.id = id;
    //Default text for tooltip
    this.description = 'Select the appropriate option from the drop-down.';
}

//Add a question mark icon before the label
PageSettingTooltip.prototype.appendIcon = function() {
    var questionIcon = document.createElement('SPAN'),
          parentDiv = document.querySelector(this.id).parentElement,
          label = document.querySelector(this.id);
    //This class adds the question mark image in MT
    questionIcon.classList.add('mt-icon-question2');
    //Giving the questionIcon an id so it can be selected later
    questionIcon.id = this.name + '-qicon';
    //Insert the icon before the label
    parentDiv.insertBefore(questionIcon, label);
};

//Add a tooltip to the icon
PageSettingTooltip.prototype.addTooltip = function() {
    var classTooltip = document.createElement('DIV'),
          questionIcon = document.querySelector('#' + this.name + '-qicon');
    //Add two classes to the tooltip for styling
    classTooltip.classList.add('class-tooltip');
    classTooltip.classList.add('class-tooltip-hidden');
    //The tooltip text is the class description
    classTooltip.textContent = this.description;
    //Append the tooltip to the question icon
    questionIcon.appendChild(classTooltip);
    //The tooltip will display the question icon is hovered over
    questionIcon.addEventListener('mouseenter', function() {
        classTooltip.classList.remove('class-tooltip-hidden');
    });
    questionIcon.addEventListener('mouseleave', function() {
        classTooltip.classList.add('class-tooltip-hidden')
    });
};

//Grab all the page classification labels
var allLabels = document.querySelectorAll('.live-tag-label'),
      labelsArray = Array.prototype.slice.call(allLabels);
//Empty array to hold each of the instantiated PageSettingTooltip objects
var pstArray = [];

//Iterate through each of the page classification labels
labelsArray.forEach(function(x, index) {
    //Define the name and id for each object
    var classifName = labelsArray[index].innerHTML.replace(/\s+/g, '-').toLowerCase();
    var classifId = '#' + labelsArray[index].id;
    //Instantiate a new PageSetting Tooltip
    pstArray[index] = new PageSettingTooltip(classifName, classifId);
    //Add the icon
    pstArray[index].appendIcon();
});

    /* *Section for defining page setting classification tooltip text * */
pstArray[0].description = "Controls page display and hierarchy"; //Article type
pstArray[1].description = "If applies to all or none, choose \'Not Market Specific\'"; //Market
pstArray[2].description = "Person responsible for updating page; receives all feedback"; //Owner
pstArray[3].description = "Who the article was written for, though others may have access"; //Target Audience
pstArray[4].description = "Track when the article is ready for posting or needs editing"; //Stage
pstArray[5].description = "Select an option, NA, or Multi-product"; //Product
pstArray[6].description = "Controls URL for authentication"; //Platform
pstArray[7].description = "Used for release notes; not required for other pages"; //Year
pstArray[8].description = "Controls Internal Use Only flag"; //Page Access
pstArray[9].description = "Used in combination with Classification tabs to control which articles appear on which tab" //Tab display
pstArray[10].description = "Works with Content Owner and updates content as necessary; receives all feedback"; //Author

//Iterate through labelsArray to add the tooltip
labelsArray.forEach(function(x, index) {
    pstArray[index].addTooltip();
});

//Add an icon/tooltip to the Tags and Summary labels
function tooltipMaker (a, b, c) {
    //Add the icon
    var label = a,
        parent = b,
        icon = document.createElement('SPAN');
    icon.classList.add('mt-icon-question2');
    icon.id = label.textContent.toLowerCase() + '-qicon';
    parent.insertBefore(icon, label);
    //Add the tooltip
    var tooltip = document.createElement('DIV');
    tooltip.classList.add('class-tooltip');
    tooltip.classList.add('class-tooltip-hidden');
    //Add tooltip text
    tooltip.textContent = c;
    //Append the tooltip to the icon
    icon.appendChild(tooltip);
    //The tooltip will display when the question mark icon is hovered over
    icon.addEventListener('mouseenter', function() {
        tooltip.classList.remove('class-tooltip-hidden');
    });
    icon.addEventListener('mouseleave', function() {
        tooltip.classList.add('class-tooltip-hidden');
    });
    if (label == document.querySelector('.mt-overview-label')) {
        observer.disconnect();
    }
}

//Wait for MT to append nodes to .mt-collapsible-section, then create Summary tooltip
if (window.MutationObserver) {
    var summContainer = document.querySelector('#mt-summary .mt-collapsible-section');
    var observer = new MutationObserver(function(mutations) {
        tooltipMaker(document.querySelector('.mt-overview-label'), document.querySelector('.mt-overview-container'), '2-3 sentences displayed in search results');
    });
    observer.observe(summContainer, {childList: true});
};

//Create Tags tooltip
tooltipMaker(document.querySelector('#live-tag-input-area label'), document.querySelector('#live-tag-input-area'), '3-10 tags (search terms)');

};
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
/* Polyfill for ES6 and fetch */
//Keep this at the end of the head to avoid breaking other scripts
<script src="https://polyfill.io/v3/polyfill.min.js?features=es2015%2Cfetch"></script>