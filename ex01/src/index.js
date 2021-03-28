$(function(){
    var $write = $('#write'),
        shift = false,
        capslock = false;
        
    function updateHTMl ($elem, innerHTML) {
      $elem.html(innerHTML);
      $elem.trigger('input');
    }
     
    $('#keyboard li').click(function(){
        var $this = $(this),
            character = $this.html();
            
        if ($this.hasClass('right-shift')) {
            $('.letter').toggleClass('uppercase');
            $('.symbol span').toggle();
             
            shift = (shift === true) ? false : true;
            capslock = false;
            return false;
        }
        
        if ($this.hasClass('capslock')) {
            $('.letter').toggleClass('uppercase');
            capslock = true;
            return false;
        }
        
        if ($this.hasClass('delete')) {
            var html = $write.html();
             
        		updateHTMl($write, html.substr(0, html.length - 1));
            return false;
        }
        
        if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
        if ($this.hasClass('space')) character = ' ';
        if ($this.hasClass('tab')) character = "\t";
        if ($this.hasClass('return')) character = "\n";
         
        if ($this.hasClass('uppercase')) character = character.toUpperCase();
         
        if (shift === true) {
            $('.symbol span').toggle();
            if (capslock === false) $('.letter').toggleClass('uppercase');
             
            shift = false;
        }
         
        updateHTMl($write, $write.html() + character);        
    });
});
