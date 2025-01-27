var positionY = 0;
var scrollTop;

var lastPositionX =0;

$( document ).ready(function() {
    //récupérer les dimension de la fenêtre :
    var hauteurFenetre = $(window).width();
    var largeurFenetre = $(window).height();
    scrollTop = $(window).scrollTop(); //récupérer la "quantité" de scroll
});   
////vous pouvez rédiger vos modification ici !



/////Ci-dessous la fonction permettant de déclancher des modifications en fonction du scroll
$(window).on( 'scroll', function(){
    scrollTop = $(window).scrollTop(); 
    scrollTop_ralenti = scrollTop / 1
    //création d'une varible contenant la "quantitée de scroll" //
    $('#vi').css({'transform' : 'rotate('+scrollTop+'deg)'});
    $('#vs').css({'transform' : 'rotate('+scrollTop+'deg)'});
    $('#vi1').css({'transform' : 'rotate(' + scrollTop_ralenti + 'deg)'});
    $('#vs1').css({'transform' : 'rotate(' + scrollTop / 1 + 'deg)'}); 
    $('#vi2').css({'transform' : 'rotate(' + scrollTop/2+ 'deg)'});
    $('#vs2').css({'transform' : 'rotate(' + scrollTop /2+ 'deg)'}); 
    $('#vi3').css({'transform' : 'rotate(' + scrollTop/3 + 'deg)'});
    $('#vs3').css({'transform' : 'rotate(' + scrollTop /3+ 'deg)'}); 
    $('#vi4').css({'transform' : 'rotate(' + scrollTop/5 + 'deg)'});
    $('#vs4').css({'transform' : 'rotate(' + scrollTop /5+ 'deg)'});
    var scrollTop = $(window).scrollTop();
    var opacity = 1 - (scrollTop / 800); // L'opacité commence à 1 et diminue avec le scroll
   // Empêche que l'opacité devienne négative
    $('.s').css({'opacity' : opacity });
    $('.i').css({'opacity' : opacity });
    
    // modification de la position du "top" de l'élément 
    //$('#vi').css({'left' :  scrollTop_ralenti + 'vw'}); ICI JE CHANGE LA TAILLE AUSSI AVEC LE SCROLL
});

$(window).on('mousemove', function(event) {
  // Correction de la valeur de event.pageY pour tenir compte du scroll
   var positionX = event.pageX;

  // Calcul de la rotation de la teinte en fonction de l'axe X (horizontal)
  var hue = (positionX / $(window).width()) * 360; // Rotation de la teinte entre 0 et 360 degrés
 // Applique les modifications de couleur et de saturation aux éléments SVG spécifiques
  for (let i = 3; i <= 12; i++) {
      $(`#f${i}`).css({
          'filter': `hue-rotate(${hue}deg)` // Applique la saturation et la rotation de la teinte
      });
  }
});

$(window).on('mousemove', function(event) {
  // Correction de la valeur de event.pageY pour tenir compte du scroll
  var positionY = event.pageY;
  // Calcul de la rotation de la teinte en fonction de l'axe X (horizontal)
  var hue = (positionY / $(window).width()) * 360; // Rotation de la teinte entre 0 et 360 degrés
  // Applique les modifications de couleur et de saturation aux éléments SVG spécifiques
  
      $('#principale').css({
          'filter': `hue-rotate(${hue}deg)` // Applique la saturation et la rotation de la teinte
      });
  
});



 //$(window).on('mousemove', function(){
  // positionY = event.pageY - scrollTop;
     // corection de la valeur de event.pageY pour qu'elle ne soit pas affectée par le scroll

 //})
 $(window).on('click', function(event) {
  var mouseX = event.pageX; // Position horizontale de la souris
  var mouseY = event.pageY; // Position verticale de la souris

  $('.moove').each(function() {
      var element = $(this);
      
      // Récupère la position de chaque élément par rapport à la page
      var elementOffset = element.offset();
      var elementX = elementOffset.left + element.width()/2; // Centre horizontal de l'élément
      var elementY = elementOffset.top + element.height() / 2; // Centre vertical de l'élément
      
      // Calcul de la différence entre la souris et l'élément
      var deltaX = mouseX - elementX;
      var deltaY = mouseY - elementY;
      
      // Calcul du déplacement des éléments en fonction de la position de la souris
      var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY); // Distance entre la souris et l'élément
      var maxDistance = 1050; // Distance max à partir de laquelle l'élément ne bouge plus

      // Vérifie si la souris est assez proche de l'élément
      if (distance < maxDistance) {
          var moveFactor = Math.min(1, distance / maxDistance); // Facteur de mouvement limité à 1
          var moveX = deltaX / 3 * moveFactor; // Poussée horizontale (avec un facteur pour ralentir l'effet)
          var moveY = deltaY / 3 * moveFactor; // Poussée verticale
          
          // Appliquer les transformations uniquement sur l'élément survolé
          element.css({
              'transform': `translate(${moveX}px, ${moveY}px)`,
              'transition': 'transform 0.1s ease' // Transition pour la fluidité
          });
      } else {
          // Réinitialise la transformation si la souris est trop loin
          element.css('transform', 'translate(0, 0)');
      }
  });
});

 


//let roulisconverti=mapValue (valeur, min1,max1,min2,max2)
 //$(window).on( "scroll", function() {
  
 


//$("#v1").on("mousemove", function() {
  //$(this).css("filter", "brightness(50%)"); // Assombrir l'image
//});

//$("#v1").on("mouseout", function() {
 // $(this).css("filter", "none"); // Remet l'image à sa couleur d'origine
//}); 



 //////// ///ne rien écrire après ceci



