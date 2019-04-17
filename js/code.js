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
