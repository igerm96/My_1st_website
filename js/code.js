/*
  Once again, formatting and organization is the main issue here. One note
  (which I constantly forget), is that you can actually use jQuery .slideToggle()
  instead of checking 'expanded'.
*/

var expanded = false;

      $(document).ready(function() {

        $('#topTen').click(function(){
          if(!expanded){
            // slideDown will 'show' the element, and animate
            $('#topVG').slideDown();
            expanded = true;
          }else{
            // slideUp will animate, then 'hide' the element.
            $('#topVG').slideUp();
            expanded = false;
          }
        });
      });
