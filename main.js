$(function() {

    var imagesrc = [
        "stock/image1.jpeg",
        "stock/image2.jpeg",
        "stock/image3.jpeg",
        "stock/image4.jpeg",
        "stock/image5.jpeg",
        "stock/image6.jpeg",
        "stock/image7.jpeg",
        "stock/image8.jpeg",
    ];

    $storage = $(".storage");
    $viewer = $(".viewer");
    $index = 0;


    for (var i = 0; i < imagesrc.length; i++) {
        $storage.append("<div class = " + "image" + i + "></div>");
        $(".image" + i).append("<img src = " + imagesrc[i] + "></img>");
        $viewer.append("<img class='myslides' src=" + imagesrc[i] + "></img>");
    }

    $(".viewer.myslides:eq(0)").css("display", "block");
    $('.storage img:eq(0)').addClass('active');

    $myslides = $('.myslides');
    $stimg = $('.storage img');
    $(document).on("keydown", () => {
        $myslides.css("display", "none");
        $stimg.removeClass("active");
        $index = show($index);
        if ($index > imagesrc.length - 1) {
            $index = 0;
        } else if ($index < 0) {
            $index = imagesrc.length - 1;
        }
        $(".myslides:eq(" + $index + ")").css("display", "block");
        $('.storage img:eq(' + $index + ')').addClass("active");
    });

    function show($index) {
        if (event.keyCode == 39) {
            $index++;
        }
        if (event.keyCode == 37) {
            $index--;
        }
        return $index;
    }
});