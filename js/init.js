$(document).ready(function(){


///////////////////////////////////////////////////////

//                       Меню                        //

///////////////////////////////////////////////////////

    if($(window).width()<=992){

        $(".navbar__menu").removeClass("hidden-xs").removeClass("hidden-sm").hide();

    }
    

    $(".navbar__sandwich__icon").on("click",function(){

        $(".navbar__menu").slideToggle();

    })

///////////////////////////////////////////////////////

//                 Страница товара                   //

///////////////////////////////////////////////////////


/*  Каруселька для фото товара */



    $('.owl-carousel').owlCarousel({
            items:1,
            loop:true,
            center:true,
            margin:10,
            URLhashListener:true,
            autoplayHoverPause:true,
            startPosition: 'URLHash',
            responsiveClass:true,
        	responsive:{

    			0:{ nav:true }, 991:{ nav:false },

            },

    });



/*    Каруселька для похожих товаров на странице товара    */
/*    А если телефон - то никакой карусельки!              */

if($(window).width()>767){

/* 768+ */    $('.owl-related').owlCarousel({
/* 768+ */      
/* 768+ */        loop:false,
/* 768+ */        margin:10,
/* 768+ */        autoplayHoverPause:true,
/* 768+ */        nav:true,
/* 768+ */        URLhashListener:false,
/* 768+ */        responsive:{
/* 768+ */               
/* 768+ */                767:{items:2, },
/* 768+ */                991:{ items:3,},
/* 768+ */
/* 768+ */            },
/* 768+ */      
/* 768+ */   });

}

if($(window).width()<=767){

    $(".owl-related__item").each(function(){

       var data = $(this).find(

           ".owl-related__item__collection,.owl-related__item__button,.owl-related__item__buy"

       ).detach();

       data.appendTo($(this).find(".owl-related__item__info"));
    });

}




/*

.######..##...##...####....####...######...####..
...##....###.###..##..##..##......##......##.....
...##....##.#.##..######..##.###..####.....####..
...##....##...##..##..##..##..##..##..........##.
.######..##...##..##..##...####...######...####..
.................................................

*/

 if($(window).width()<=767){

     $("img[data-xs-src]").each(function(){

       // $(this).fadeOut();
       // 
       //alert($(this).attr("data-xs-src"));

          $(this).attr("src",$(this).attr("data-xs-src"));

    });

 }


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
 

});