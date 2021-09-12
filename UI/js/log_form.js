let isOpenComment = false;
let isOpenTrouble = false;

window.addEventListener('load', () => {
    $("#comment_field").hide();
    $("#trouble_field").hide();
});

$(function() {
    $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
    
    $('#show_comment').on('click', function() {
        isOpenComment = !isOpenComment;
        showComment(isOpenComment);
    });

    $('#show_trouble').on('click', function() {
        isOpenTrouble = !isOpenTrouble;
        showTrouble(isOpenTrouble);
    });
});

function showComment(isOpenComment) {
    if(isOpenComment) {
        $("#comment_field").show();
    } else {
        $("#comment_field").hide();
    }
}

function showTrouble(isShowTrouble) {
    if(isShowTrouble) {
        $("#trouble_field").show();
    } else {
        $("#trouble_field").hide();
    }
}