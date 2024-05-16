// box
$(document).ready(function() { 

	$("#menu-st li").click(function(){
	  window.location=$(this).find("a").attr("href"); return false;
	});
	
	$("#mens li").click(function(){
	  window.location=$(this).find("a").attr("href"); return false;
	});

	$("a.single_image").fancybox({ 
		'zoomOpacity'			: false,						
		'overlayShow'			: false,
		'speedIn'		     	: 200,
		'speedOut'			  : 200,
		'transitionIn'		: 'elastic',
		'transitionOut'		: 'elastic',
		'showCloseButton' : true,
		'showNavArrows'   : false,
		'hideOnOverlayClick' : true,
		'hideOnContentClick' : true,
		'enableEscapeButton' : true
		
								}); 
	/*					
	$("a.single_image").fancybox({
    	 openEffect	  : 'elastic',
    	 openEasing   : 'easeOutBack',
       closeEffect	: 'elastic',
		   closeEasing  : 'easeInBack'
    });						
						
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});			*/				
									
	$("a#inline_content").fancybox({ 'hideOnContentClick': true }); 
	
	$("a.image_group").fancybox({ 
		'zoomOpacity'			: false,						
		'overlayShow'			: false,
		'speedIn'		     	: 200,
		'speedOut'			  : 200,
		'transitionIn'		: 'elastic',
		'transitionOut'		: 'elastic'
	});
								
	$(".iframelink").fancybox({ 
		'width'				: '75%',
		'height'			: '75%',
        'autoScale'     	: false,
        'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'type'				: 'iframe'
	});
	
	$(".iframelinkpay").fancybox({ 
		'width'				: '75%',
		'height'			: '75%',
        'autoScale'     	: false,
        'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'type'				: 'iframe',
		'onClosed': function() {
    parent.location.reload(true);
  }
	});
	
	
	/* $('#stiati-container').vTicker({
		speed: 400,
		pause: 3000,
		showItems: 5,
		animation: '',
		mousePause: true,
		height: 530,
		direction: 'up'
  	}),
	 $('#news-container').vTicker({
		speed: 500,
		pause: 4000,
		showItems: 3,
		animation: '',
		mousePause: true,
		height: 400,
		direction: 'up'
  	}),
	 $('.slideshow').cycle({
		fx: 'fade' // ex: fade, scrollUp, shuffle, etc...
	});
	*/
/*	
	$('.tabs a').click(function(){
		switch_tabs($(this));
	});
 
	switch_tabs($('.defaulttab'));
*/	
}); 

/*
function switch_tabs(obj)
{
	$('.tab-content').hide();
	$('.tabs a').removeClass("selected");
	var id = obj.attr("rel");
 
	$('#'+id).show();
	obj.addClass("selected");
}

*/

function clearForm(oForm) {
    
  var elements = oForm.elements; 
    
  oForm.reset();

  for(i=0; i<elements.length; i++) {
      
	field_type = elements[i].type.toLowerCase();
	
	switch(field_type) {
	
		case "text": 
		case "password": 
		case "textarea":
	        case "hidden":	
			
			elements[i].value = ""; 
			break;
        
		case "radio":
		case "checkbox":
  			if (elements[i].checked) {
   				elements[i].checked = false; 
			}
			break;

		case "select-one":
		case "select-multi":
            		elements[i].selectedIndex = -1;
			break;

		default: 
			break;
	}
    }
}


function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}

function MM_jumpMenuGo(objId,targ,restore){ //v9.0
  var selObj = null;  with (document) { 
  if (getElementById) selObj = getElementById(objId);
  if (selObj) eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0; }
}


function jumpto(x){

  if (document.form1.jumpmenu.value != "null") {
  document.location.href = x
  }
}