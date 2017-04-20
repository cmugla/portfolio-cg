$(document).ready(function($) {
  console.log("you're excellent");
  console.log("\n.-        -.\n| ,-. ,-.  |\n| |   | |  |\n| `-' `-|  |\n`-     ,| -'\n       `'    ")

  var $project = $('#side-projects li img.each')

  $project.click(showProjectDeets)

  function showProjectDeets(e){
    e.preventDefault();
    var $projContainer = $(this).parent()
    // Show project
    $projContainer.addClass('show-project', 300, "easeOutSine");
    $projContainer.children('.technologies').removeClass('bye');
    // Hide proeject
    $('.close-project').click(function(){
      $projContainer.removeClass('show-project', 300)
      $projContainer.children('.technologies').addClass('bye');
    })
  }

  // remove quick play on mobile devices
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   $('#quick-play').css('display', 'none');
   $('.arrow-down').css('top','40px')
  }

});
