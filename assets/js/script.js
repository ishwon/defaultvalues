(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $("#mobile").click(function(){
            console.log("click");
            $(".dsktp-nav").toggleClass("open");
        });



    });

})(jQuery);
