$(document).ready(function(){
    $(".search-bar").keyup(function(){
        let filter = $(this).val();
        $("a").each(function(){
            if ($(this).attr("data-title").search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
            } else {
                $(this).show();
            }
        });
    });
});

lightbox.option({
    'maxWidth': 1200,
    'showImageNumberLabel': false,
    'positionFromTop': 100
  });