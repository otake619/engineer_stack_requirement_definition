$(function() {
    $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
    
    $("#memo").keyup(function() {
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

    $("#category").keyup(function() {
        const separator = ",";
        let inputText = $(this).val();
        let textToArray = separateText(separator, inputText);
        checkElement(textToArray);
        let dispText = arrayToText(textToArray);
        $("#disp_category").text(dispText);
    })
});

function separateText(separator, text) {
    let splitText = text.split(separator);
    return splitText;
}

function arrayToText(array) {
    let text = array.join(" ");
    return text;
}

function countCategory(categoryArray) {
    let length = categoryArray.length;
    let remain = 5 - length;
    const id = "#count_category";

    if(remain > 0) {
        const text = "残り" + remain + "個入力可能";
        changeText(id, text);
    } else if(remain === 0){
        const text = "入力できる最大数です。";
        changeText(id, text);
    } else {
        const isNormal = false;
        const text = "最大数を超えています!";
        changeText(id, text);
        changeClass(id, isNormal);
    }
}

function checkElement(array) {
    const id = "#count_category";
    
    for(let i=0;i<array.length;i++) {
        if(array[i] === '' || array[i].length === 0) {
            array.splice(i, 1);
        } else if(array[i].length > 30) {
            const isNormal = false;
            const text = "カテゴリが30文字を超えています!";
            changeText(id, text);
            changeClass(id, isNormal);
            return;
        } else {
            const isNormal = true;
            changeClass(id, isNormal);
            console.log(array);
        }
    }
    countCategory(array);
    return array;
}

function changeClass(id, isNormal) {
    let normalStatus = "has-text-primary";
    let abnormalStatus = "has-text-danger";
    
    if(isNormal) {
        $(id).attr("class", normalStatus);
    } else {
        $(id).attr("class", abnormalStatus);
    }
}

function changeText(id, text) {
    $(id).text(text);
}
