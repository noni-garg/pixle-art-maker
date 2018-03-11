//function that builds a block in the "udacity"
//where a is height of block
//and b is width of block
//"block" is appended with the "udacity"
function makeGrid(a,b) {
    for (var rows = 0; rows < a; rows++) {
        for (var columns = 0; columns < b; columns++) {
            $("#udacity").append("<div class='block'></div>");
        };
    };
    $(".block").height(850/a);
    $(".block").width(850/b);
};

$(document).ready(function() {
    makeGrid($("#inputHeight").val(),$("#inputWidth").val());

    $(".block").click(function() {
        $(this).css("background-color", $("#colorPicker").val());
        });

    $("#button").click(function() {
        $(".block").remove();
        makeGrid($("#inputHeight").val(),$("#inputWidth").val());
        $(".block").click(function() {
        $(this).css("background-color", $("#colorPicker").val());
        });
    });
});
