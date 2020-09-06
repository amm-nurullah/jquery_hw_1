$(document).ready(function() {

	$('#cick_event').click(function(){
		$(this).hide();
	});


	$('#dblcick_event').dblclick(function(){
		$(this).hide();
	});

	$('#mouseenter').mouseenter(function(){
		alert("Hello World!!");
	});
			
	$('#mouseleave').mouseleave(function(){
		alert("Good Day");
	});

	$('#hover').hover(function(){
		alert("Good Morning");
	},
		function(){
			alert("Good Night");
	});
	$('input').focus(function(){
		$(this).css("background-color","#95a5a6")
	});

	$('.on_method').on("click", function(){
    $(this).hide();
  });

	$('.on_m').on({
    mouseenter: function(){
      $(this).css("background-color", "#1abc9c");
    },  
    mouseleave: function(){
      $(this).css("background-color", "#3498db");
    }, 
    click: function(){
      $(this).css("background-color", "#c0392b");
    }  
  });

	$('#show').click(function(){
		$('.s_h').show('slow');
	});

	$('#hide').click(function(){
		$('.s_h').hide('slow');
	});

	$('#toggle').click(function(){
		$('.s_h').toggle('slow');
	});

	$('#fadein').click(function(){
		$('.box_1').fadeIn(2000);
		$('.box_2').fadeIn(3000);
		$('.box_3').fadeIn(4000);
	});
	$('#fadeout').click(function(){
		$('.box_4').fadeOut(2000);
		$('.box_5').fadeOut(3000);
		$('.box_6').fadeOut(4000);
	});

	$('#fadetoggle').click(function(){
		$('.box_7').fadeToggle(2000);
		$('.box_8').fadeToggle(3000);
		$('.box_9').fadeToggle(4000);
	});

	$('#fadeto').click(function(){
		$('.box_10').fadeTo('slow', 0.2);
		$('.box_11').fadeTo('slow', 0.5);
		$('.box_12').fadeTo('slow', 0.7);
	});

	$('.btn_1').click(function(){
		$('.slide_down').slideDown(1000);
	});

	$('.btn_2').click(function(){
		$('.slide_up').slideUp(1000);
	});

	$('.btn_3').click(function(){
		$('.slide_toggle').slideToggle(1000);
	});

	$('#animation').click(function(){
		$('.animate_box').animate({
			left: '500px',
			width: '300px',
			height: '200px',
		});
	});

	$("#animation_1").click(function(){
    var nuru = $(".animate_box1");
    nuru.animate({height: '300px', opacity: '0.4'}, "slow");
    nuru.animate({width: '300px', opacity: '0.8'}, "slow");
    nuru.animate({height: '100px', opacity: '0.4'}, "slow");
    nuru.animate({width: '100px', opacity: '0.8'}, "slow");
  });

	 $("#animation_2").click(function(){
    var nurullah = $(".animate_box2");  
    nurullah.animate({left: '100px'}, "slow");
    nurullah.animate({fontSize: '2em'}, "slow");
  });

	$("#chaining").click(function(){
	    $(".nazan").css("background", "#c23616")
	    .slideUp(2000)
	    .slideDown(2000);
  });
	
});

