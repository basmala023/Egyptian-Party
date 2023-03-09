let sideBarWidth = $(".sideInner").innerWidth();
$(".sideInner").css("left",-sideBarWidth);
$(".content").css("margin-right", sideBarWidth);
$("span").css("margin-left", "0px");
$("span i").click(function(){
       
    
        if($(".sideInner").css('left')=="0px"){
            $(".sideInner").animate({left:-sideBarWidth},400);
            $(".content").css("margin-right", sideBarWidth);
            $("span").css("margin-left", "0px");

          
        }
        else{
            $(".sideInner").animate({left:"0px"},400);
            $(".content").css("margin-right", -sideBarWidth);
            $("span").css("margin-left", "200px");

            
        }
});
$("#closeBt").click(()=>{

    
        if($(".sideInner").css('left')=="0px"){
            $(".sideInner").animate({left:-sideBarWidth},400);
            $(".content").css("margin-right", sideBarWidth);
            $("span").css("margin-left", "0px");

          
        }
       
});
$("#singers div:first").css("display", "block");
$("#singers h2").click(function () {
         $(this).next().slideToggle(500);
            $("#singers div").not($(this).next()).slideUp(500);
 });
 $('#getting-started').countdown('2023/07/20', function(event) {
        $(this).html(event.strftime(`
      
    <div class="row">
        <div class=" col-xs-3 w-25">
            <div id="days"class="temp"><h2 class="text-lowercase">%D d</h2></div>
        </div>
        <div class=" col-xs-3 w-25">
            <div id="days"class="temp"><h2 class="text-lowercase">%H h</h2></div>
        </div>
        <div class=" col-xs-3 w-25">
            <div id="minutes"class="temp"><h2 class="text-lowercase">%M m</h2></div>
        </div>
        <div class="col-xs-3 w-25" >
            <div id="seconds"class="temp"><h2 class="text-lowercase">%S s</h2></div>        </div>
    </div>

        
        `));
      });

      $(function () {
        let max = 100;
        $("textarea").keyup(function () {
            let length = $(this).val().length;
            let character = max - length;
            console.log(character)
            if (character <= 0) {
                $("#character").text("your available character finished");
            } else {
                $("#character").text(character);
            }
        });
    });
    
    // <div id="days"class="temp"><h2 class="text-lowercase">%D d</h2></div>
    // <div id="days"class="temp"><h2 class="text-lowercase">%H h</h2></div>
    // <div id="minutes"class="temp"><h2 class="text-lowercase">%M m</h2></div>
    // <div id="seconds"class="temp"><h2 class="text-lowercase">%S s</h2></div>