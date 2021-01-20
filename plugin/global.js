$(function (){

    var menu = new function (){
        this.in = function (who){
            this.show(who, 0)
                .hide(who, 1);
        }
        this.out = function (who){
            this.show(who, 1)
                .hide(who, 0);
        }
        this.hide = function (who, index){
            who.find("img").eq(index).removeClass("hidden");
            return this;
        }
        this.show = function (who, index){
            who.find("img").eq(index).addClass("hidden");
            return this;
        }
    }

    //menu switch
    $(".m_box").hover(function (){
        menu.in($(this))
    }, function (){
        menu.out($(this))
    });

    //screen
    $(document).queue("screen", [function (){

        var lib = new function (){
            this.init_style = function (){
                $("html, body").css({
                    "height" : '100%'
                });

                $(".wrapper").css({
                    "min-height" : "100%",
                    "max-height" : "initial",
                    "height" : "initial"
                })

                $(".header.float").css({
                    "min-height": $(".container_bg").height()
                });
                // $(".header.float").css({
                //     "min-height": $(".container").height()
                // });

                $("head").append('<style>*{font-family: "微軟正黑體" !important; }</style>')

                // $(".container_bg").css({
                //     "min-height" : "1080px",
                //     "left" : $(".header.float").width()
                // })
            }

            this.resize = function (){
                var _this = this;
                $(window).on("resize", function (){
                    _this.init_style();
                })
            }

            this.main = function (){
                this.init_style();
                this.resize();
            }
        }
        lib.main();
        

    }]).dequeue("screen");

})