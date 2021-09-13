window.addEventListener('load', () => {
    
});

$(function() {
    $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
    
    $("#memo").keyup(function(){
        let count = $(this).val().length;
        let remain = 2000 - count;
        let text;

        if(remain >= 0) {
            text = "残り" + remain + "文字入力可能";
        } else {
            let over = Math.abs(remain);
            text = over + "文字超過";
        }
        
        $('#count_text').text(text);
    });
});