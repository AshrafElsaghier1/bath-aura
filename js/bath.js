// menu bar openning 
$('.menu-bar .menu').on('click',function () {
	$('.nav-links').addClass('active');
	
})
var $window = $(window)
// hide fixed menu if window > 992
$window.resize(function () {
	if ( $window.width() >= 992 ){
		$('.nav-links').removeClass('active')
	}

})

// menu-bar closing 

$('.close-item span').on('click',function () {
	if ( $('.nav-links').hasClass('active')){

		$('.nav-links').removeClass('active')
		
	}
})
// search menu openning


$('.search-icon a,.search-btn').on('click',function (e) {
	e.preventDefault();
	$('#search').slideDown()

})
// search menu closing

$('#search .times span').on('click',function () {
	$('#search').slideUp()
})

 // add fixed positon to filter nav

 window.onscroll = function() {
 	mySticky() 
 };

 var navbar = document.querySelector('.filter-nav');
 var sticky = navbar.offsetTop;
 function mySticky() {
 	if (window.pageYOffset >= sticky) {
 		navbar.classList.add("fixed-filter")
 	} else {
 		navbar.classList.remove("fixed-filter");
 	}
 }
 mySticky()


 $('.filter-btn').on('click',function () {

 	$(this).fadeOut(0).siblings().fadeIn(0);


 })



 $('.footer-menu a ,.filter-menu a').on('click',function () {
 	$(this).children('span').toggleClass('fa-minus fa-plus')

 })


 $('.filter-button button , .filter-sidebar .times ').on('click',function () {


 	$('.filter-sidebar').toggleClass(' open ')

 	if ($('.filter-sidebar').hasClass('open')){

 		if ($('.row .shop-card').hasClass('col-lg-3')){

 			$('.row .shop-card').removeClass('col-lg-3').addClass('col-lg-4')
 		}

 		$('.filter-btn').text('Hide Filters')


 	}else{

 		$('.filter-btn').text('Show Filters')


 		if ($('.row .shop-card').hasClass('col-lg-4')) {


 			$('.row .shop-card').removeClass('col-lg-4').addClass('col-lg-3')
 			
 		}

 	}

 })

 $window.bind('resize',function () {
 	isotope()
 })
 function isotope () {

 	if (window.innerWidth >= 992){
 		$('.filter-btn').on('click',function (e) {
 			var selected = $(this).data('selected');
 			e.preventDefault()

 			$('.products-shop .row').isotope({
 				filter : selected

 			})
 			return false

 		})
 		$('.products-shop .row').isotope({
 			itemSelector:'.shop-card',
 			layoutMode: 'fitRows'
 		})

 	}else{

 		return false;
 	}


 }
 isotope()