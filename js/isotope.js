     jQuery( function() {
     	var $container = $('.grid');
     	$container.imagesLoaded(function(){

     	  $container.isotope({
     		itemSelector :".grid-item",
     		percentPosition: true,
               masonry: {
                 columnWidth: '.grid-sizer'
               }
     	  });
     	});

     	$(".filter-button-group").on("click","button",function() {
     		var filterValue = $(this).attr("data-filter");
     		$container.isotope({ filter: filterValue });
     	});

     	$(".button-group").each(function( i, buttonGroup ){
     		var $buttonGroup = $( buttonGroup );
     		$buttonGroup.on( "click", "button", function(){
     			$buttonGroup.find(".is-checked").removeClass("is-checked");
     			$( this ).addClass("is-checked");
     		});
     	});
     });
