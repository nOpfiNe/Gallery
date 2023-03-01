const gM = document.querySelector(".galeria-modal");
const iGM = document.querySelector(".galeria-modal img");

// Filtro

$('.filter-btn').on('click', function() {

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'dsg-btn') {
      eachBoxes('dsg', boxes);
    } else if(type == 'dev-btn') {
      eachBoxes('dev', boxes);
    } else if(type == 'seo-btn') {
      eachBoxes('seo', boxes);
    } else {
      eachBoxes('all', boxes);
    }

  });

function eachBoxes(type, boxes) {

  if(type == 'all') {
     $(boxes).fadeIn();
  } else {
    $(boxes).each(function() {
      if(!$(this).hasClass(type)) {
        $(this).fadeOut('slow');
      } else {
        $(this).fadeIn();
      }
    });
  }
}

//Small img

function fecharGaleria(){
    gM.style.visibility = "hidden";
    iGM.style.transform = "scale(0)";
}

function abrirGaleria(src){
    gM.style.visibility = "visible";
    iGM.style.transform = "scale(1)";
    iGM.src = src
}