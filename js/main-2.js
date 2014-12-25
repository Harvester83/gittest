$(document).ready(function() {

	/*('div.change-article-first').show();*/
	/*$('div.news-title ul li').hover(

        function(){
            $(this).stop().animate({
                width: "480px",
                opacity: 0.4


              }, 500 );
	    },

        function () {
			$(this).stop().animate({
				width:"480px",
				opacity: 1
		  }, 500 );
		}
	);*/


	 $('.news-title ul li a').hover(function(){
		cur_news = $(this).parent('li').index();
		$('div.change_article').hide();
		$('div.left-bar div').eq(cur_news).show();
	});
	
	
	
		
				
	/*$('div.main-lang').click(function () {
		$('li.non-rad-lang').slideToggle('slow');
	});

		
	$(".faq-menu img, a:last").addClass("active");
	$(".faq-menu img:not(:last)").hide();
	
	$(".faq-menu a").click(function(){
			$(this).next("img").slideToggle("fast")
			.siblings("img:visible").slideUp("fast");
			$(this).toggleClass("active");
			$(this).siblings("a").removeClass("active");
	}
	); */
	 
		 

});
 
 
 
 
 

