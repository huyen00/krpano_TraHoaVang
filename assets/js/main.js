$(document).ready(function(){
  // $(".guide").hide();
  $(".close").click(function(){
    $(".guide").hide();
    $("#icon_sharelink").css('opacity','1');
      $("#icon_info").css('opacity','1');
      $("#icon_mute").css('opacity','1');
      $("#icon_unmute").css('opacity','1');
      $("#hotspot_Close").css('opacity','1');
      $("#hotspot_open").css('opacity','1');
      $("#icon_fullscreen").css('opacity','1');
      $("#icon_VR").css('opacity','1');
      $("#icon_form").css('opacity','1');
      $("#icon_map").css('opacity','1');
  });
  $(".guide").click(function(){
      $(".guide").hide();
      $("#icon_sharelink").css('opacity','1');
      $("#icon_info").css('opacity','1');
      $("#icon_mute").css('opacity','1');
      $("#icon_unmute").css('opacity','1');
      $("#hotspot_Close").css('opacity','1');
      $("#hotspot_open").css('opacity','1');
      $("#icon_fullscreen").css('opacity','1');
      $("#icon_VR").css('opacity','1');
      $("#icon_form").css('opacity','1');
      $("#icon_map").css('opacity','1');
  });
  $("#icon_guide").click(function(){
      $(".guide").show();
      $("#icon_sharelink").css('opacity','0');
      $("#icon_info").css('opacity','0');
      $("#icon_mute").css('opacity','0');
      $("#icon_unmute").css('opacity','0');
      $("#hotspot_Close").css('opacity','0');
      $("#hotspot_open").css('opacity','0');
      $("#icon_fullscreen").css('opacity','0');
      $("#icon_VR").css('opacity','0');
      $("#icon_form").css('opacity','0');
      $("#icon_map").css('opacity','0');

  });
});
// click info
$(".close").click(function(){
  $(".info").hide();
    $("#icon_sharelink").css('opacity','1');
      $("#icon_guide").css('opacity','1');
      $("#icon_mute").css('opacity','1');
      $("#icon_unmute").css('opacity','1');
      $("#hotspot_Close").css('opacity','1');
      $("#hotspot_open").css('opacity','1');
      $("#icon_fullscreen").css('opacity','1');
      $("#icon_VR").css('opacity','1');
      $("#icon_form").css('opacity','1');
      $("#icon_map").css('opacity','1');
});
$(".info").click(function(){
    $(".info").hide();
    $("#icon_sharelink").css('opacity','1');
      $("#icon_guide").css('opacity','1');
      $("#icon_mute").css('opacity','1');
      $("#icon_unmute").css('opacity','1');
      $("#hotspot_Close").css('opacity','1');
      $("#hotspot_open").css('opacity','1');
      $("#icon_fullscreen").css('opacity','1');
      $("#icon_VR").css('opacity','1');
      $("#icon_form").css('opacity','1');
      $("#icon_map").css('opacity','1');
});
$("#icon_info").click(function(){
    $(".info").show();
    $("#icon_sharelink").css('opacity','0');
      $("#icon_guide").css('opacity','0');
      $("#icon_mute").css('opacity','0');
      $("#icon_unmute").css('opacity','0');
      $("#hotspot_Close").css('opacity','0');
      $("#hotspot_open").css('opacity','0');
      $("#icon_fullscreen").css('opacity','0');
      $("#icon_VR").css('opacity','0');
      $("#icon_form").css('opacity','0');
      $("#icon_map").css('opacity','0');
});
// click show map
$("#icon_map").click(function(){
  $(".map").show();
  $("#icon_sharelink").css('opacity','0');
  $("#icon_guide").css('opacity','0');
  $("#icon_mute").css('opacity','0');
  $("#icon_unmute").css('opacity','0');
  $("#hotspot_Close").css('opacity','0');
  $("#hotspot_open").css('opacity','0');
  $("#icon_fullscreen").css('opacity','0');
  $("#icon_VR").css('opacity','0');
  $("#icon_form").css('opacity','0');
  $("#icon_info").css('opacity','0');
});
$(".close").click(function(){
  $(".map").hide();
    $("#icon_sharelink").css('opacity','1');
      $("#icon_guide").css('opacity','1');
      $("#icon_mute").css('opacity','1');
      $("#icon_unmute").css('opacity','1');
      $("#hotspot_Close").css('opacity','1');
      $("#hotspot_open").css('opacity','1');
      $("#icon_fullscreen").css('opacity','1');
      $("#icon_VR").css('opacity','1');
      $("#icon_form").css('opacity','1');
      $("#icon_info").css('opacity','1');
});
$(".map_tour").click(function(){
    $(".map").hide();
    $("#icon_sharelink").css('opacity','1');
      $("#icon_guide").css('opacity','1');
      $("#icon_mute").css('opacity','1');
      $("#icon_unmute").css('opacity','1');
      $("#hotspot_Close").css('opacity','1');
      $("#hotspot_open").css('opacity','1');
      $("#icon_fullscreen").css('opacity','1');
      $("#icon_VR").css('opacity','1');
      $("#icon_form").css('opacity','1');
      $("#icon_info").css('opacity','1');
});

// click video
$(document).ready(function(){
  // $(".video").hide();
  $(".close").click(function(){
    $(".video").hide();
  });
  $(".video").click(function(){
      $(".video").hide();
  });
  $("#icon_video").click(function(){
      $(".video").show();
  });
});
// click form
$(document).ready(function(){
  // $(".form").hide();
  $(".close").click(function(){
    $(".form").hide();
    $("#icon_sharelink").css('opacity','1');
      $("#icon_guide").css('opacity','1');
      $("#icon_mute").css('opacity','1');
      $("#icon_unmute").css('opacity','1');
      $("#hotspot_Close").css('opacity','1');
      $("#hotspot_open").css('opacity','1');
      $("#icon_fullscreen").css('opacity','1');
      $("#icon_VR").css('opacity','1');
      $("#icon_info").css('opacity','1');
      $("#icon_map").css('opacity','1');
  });
  $(".form").click(function(){
      $(".form").hide();
      $("#icon_sharelink").css('opacity','1');
      $("#icon_guide").css('opacity','1');
      $("#icon_mute").css('opacity','1');
      $("#icon_unmute").css('opacity','1');
      $("#hotspot_Close").css('opacity','1');
      $("#hotspot_open").css('opacity','1');
      $("#icon_fullscreen").css('opacity','1');
      $("#icon_VR").css('opacity','1');
      $("#icon_info").css('opacity','1');
      $("#icon_map").css('opacity','1');
  });
  $("#icon_form").click(function(){
      $(".form").show();
      $("#icon_sharelink").css('opacity','0');
      $("#icon_guide").css('opacity','0');
      $("#icon_mute").css('opacity','0');
      $("#icon_unmute").css('opacity','0');
      $("#hotspot_Close").css('opacity','0');
      $("#hotspot_open").css('opacity','0');
      $("#icon_fullscreen").css('opacity','0');
      $("#icon_VR").css('opacity','0');
      $("#icon_info").css('opacity','0');
      $("#icon_map").css('opacity','0');
  });
  // xử lý menu icon sub
  $(".menu_sub").hide();
  $("#icon_menusub").click(function(){
    $(".menu_sub").toggle();
  });

  // xu lý show menu
  //  $(".menu_tour").show();

   $('.arrow-left').click(function(event){
    $(".menu_tour").removeClass('show_menu_tour');
    $(".menu_tour").toggleClass('hide_menu_tour');
    $('.arrow-right').show();
    $('.arrow-left').hide();
   
    
    
   
   });
   $('.arrow-right').click(function(event){
    $(".menu_tour").removeClass('hide_menu_tour');
    $(".menu_tour").toggleClass('show_menu_tour');
    $('.arrow-left').show();
    $('.arrow-right').hide();
   
   
  
  
   })
});

// hs
$(document).ready(function(){
  $(".form").hide();
  $(".info_toancanh").click(function(){
    $(".form").hide();
  });
  $(".form").click(function(){
      $(".form").hide();
  });
  $("info_toancanh").click(function(){
      $(".form").show();
  });


});

// xử lý voice 
(function ($) {
  embedpano({
      xml: "tour.xml",
      target: "pano",
      html5: "only",
      mobilescale: 1.0,
      passQueryParameters: true,
      onready: krpanoReady
  });

  function krpanoReady(krpano) {
    $("#icon_unmute").hide();
      $("#icon_unmute").on("click", function (e) {
          e.preventDefault();

          console.log(krpano);
          $("#icon_mute").show();
        
          $("#icon_unmute").hide();
    

          krpano.call("resumesound()");
      });
      $("#icon_mute").on("click", function (e) {
        e.preventDefault();

        console.log(krpano);
        $("#icon_unmute").show();
      
        $("#icon_mute").hide();
   
        krpano.call("pause_sound()");
        
        
    });
    // xu ly VR
    $("#icon_VR").on("click", function(e){
      krpano.call("webvr.enterVR()");
    })
    // xu ly scene
    
    $("#icon_back").on("click",function(e){
      krpano.call("back_scene()");
    });
    // xu ly show/hide hotspot
    $("#hotspot_open").hide();
    $("#hotspot_Close").on("click",function(e){
      $("#hotspot_open").show();
      $("#hotspot_Close").hide();
      krpano.call("hideallhotspots()");
    });
    $("#hotspot_open").on("click",function(e){
      $("#hotspot_open").hide();
      $("#hotspot_Close").show();
      krpano.call("showallhotspot()");
    });
    $(".slick-slide.slick-current").click(function(e){
      // $(".slick-slide").addclass("slick-current");
   
      krpano.call("loadscene_with_name()");
     
    });
   
    // xu ly active khi click
  $(".item-thumbs").click(function(e){
    var link_scene = $(this).attr('id');
    console.log(link_scene);
   
    var elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active");
      
    });
    var elems = document.querySelectorAll(".active_menu");
      [].forEach.call(elems, function(el) {
        el.classList.remove("active_menu");
      
      });
     
    $(this).addClass("active");
    $(this).removeClass("active_menu");
    //console.log($(this).attr('id'));
    let target_active_menu = "#" + $(this).attr('id')
    var elems_active_menu = document.querySelectorAll(target_active_menu);
      [].forEach.call(elems_active_menu, function(el) {
        el.classList.add("active_menu");
      
      });
    krpano.call("load_scene(" +link_scene + ")");
   
  });

  // xu lys show scene menu
  $(".item_sub").click(function(e){
    var link_scene = $(this).attr('id');
   
    var elems = document.querySelectorAll(".active_menu");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active_menu");
      
    });
    var elems_thumbs = document.querySelectorAll(".active");
    [].forEach.call(elems_thumbs, function(el) {
      el.classList.remove("active");
      
    });
    let target_active = "#" + $(this).attr('id');
    var elem_active = document.querySelectorAll(target_active);
    [].forEach.call(elem_active, function(el) {
      el.classList.add("active");
    
    });
    $(this).addClass("active_menu");
    $(this).removeClass("active");
 
    krpano.call("load_scene(" +link_scene + ")");
  });
  // xu ly minimap
  $(".panWrapper").mousedown(function(e){
    e.preventDefault();
  
   $(".panWrapper").hide();
    krpano.call("showmap()");
    
  });
 

   
  }
})(jQuery);

// xử lý fullscreen
function toggleFullscreen() {
if (!document.fullscreenElement &&    // alternative standard method
    !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  }
} else {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}
}
// xử lý share link
const button = document.querySelector('#icon_sharelink')
button.onclick = () => {
navigator.clipboard.writeText(window.location.href);
}

// xử lý quay trở lại scene trước
function changepano(panoName)
{
var krpano = document.getElementById("krpanoSWFObject1");
krpano.call("loadscene(" + panoName + ");");
}

$('.list-thumbs').slick({
// centerMode: true,
infinite: false,
variableWidth: false,
centerPadding: '60px',
slidesToShow: 7,
prevArrow: "<i class='fas fa-angle-left prev_arrow arrow'></i>",

nextArrow:"<i class='fas fa-angle-right next_arrow arrow'></i>",
responsive: [
  {
    breakpoint: 1025,
    settings: {
      arrows: false,
      // centerMode: true,
      centerPadding: '40px',
      slidesToShow: 5,
    
     
    }
  },
  {
    breakpoint: 1024,
    settings: {
      arrows: false,
      // centerMode: true,
      centerPadding: '40px',
      slidesToShow: 5,
    
     
    }
  },
  {
    breakpoint: 768,
    settings: {
      arrows: false,
      // centerMode: true,
      centerPadding: '40px',
      slidesToShow: 3,
    
     
    }
  },
 
  {
    breakpoint: 480,
    settings: {
      arrows: false,
      // centerMode: true,
      centerPadding: '40px',
      slidesToShow: 2
    }
  }, {
    breakpoint: 321,
    settings: {
      arrows: false,
      // centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1
    }
  }

]
});
// xư lý thumbs list
$(document).ready(function(){
  $('.slick-slide').removeClass('slick-cloned');
$(".icon_thumbs_up").click(function(){
  $(".list-thumbs").toggleClass('list-thumbs-active');
  $(".icon_thumbs_up").toggleClass('icon_thumbs_down');
 
});
});

// xu ly minimap
$(".panWrapper").mousedown(function(e){
  e.preventDefault();

 $(".panWrapper").hide();
  krpano.call("showmap()");
  
});



$('.list-thumbs').slick({

});

$(document).ready(function(){
$('.list-thumbs').on('afterChange', function(event, slick, currentSlide){
  $('.result').text('afterChange : ' + (currentSlide + 1));
});
$('.list-thumbs').slick();

});

