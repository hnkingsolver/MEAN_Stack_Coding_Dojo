$(document).ready(function(){
    $.get("https://opentdb.com/api.php?amount=12&category=15&difficulty=easy&type=boolean", displayQuestion)
        // Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
        function displayQuestion(data) {
            console.log(data)
            for (var i = 0; i < data.results.length; i++){
                console.log(data.results[i].question)
                var str= "";
                str = "<h4>" +data.results[i].question+"</h4>" + "<p>" + "True" + "</p>" + "<p>" +  "False" + "</p>"
                $(".content"+i).html(str)
                $(".boxes").click(function(){
                    $(this).find(".box").css("display", "block");
                    
                })
                
            }
            console.log(data.results);
        }
})

//boxesssssss.. try to show score, if clicked, show question

