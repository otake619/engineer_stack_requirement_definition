$(document).ready(function() {
    $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    $(".settings").click(function() {
        $(".dropdown").toggleClass("is-active");
    });

    $("#delete_memo").click(function() {
        $(".modal").toggleClass("is-active");
    });

    $(".delete").click(function() {
        $(".modal").toggleClass("is-active");
    });

    $("#modal-close").click(function() {
        $(".modal").toggleClass("is-active");
    });
});