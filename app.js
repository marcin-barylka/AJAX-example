$(document).ready(function(){

    $("#go").on("click", function() {

        $.ajax({
            url: "http://swapi.co/api/films/"
        }).done(function(response) {
            for(var i=0; i<response.results.length; i++) {
                var $p = $("<p>")
                    .text(response.results[i].title);
                $("#ajax-result").append($p);
            }
            $("#ajax-result").slideDown("fast");


        }).fail(function(error) {
            console.log(error);
            $("#ajax-result").text(error.statusText).slideDown("fast");
        });
    });
    
});