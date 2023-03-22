$.fn.extend({LFGO: function(options) {
					var LFGO=this;
					var id=$(LFGO).attr('id');
					defaults = {
						 
						 idDownload:'Download',
						 CanvasSlide:'canvas',
						 attImageLarge:'src',
						 cssPartActive:'active',
						 cssPartSelected:'select'
						 
					}
					
                    var options = $.extend({}, defaults, options);
					var idDownload=options.idDownload;
					
					var CanvasSlide=options.CanvasSlide;
					
					var attImageLarge=options.attImageLarge;
					
					var cssPartActive=options.cssPartActive;
					var cssPartSelected=options.cssPartSelected;
					
		 
		 
           
         var canvas = document.getElementById(CanvasSlide);
         var ctx = canvas.getContext("2d");
		 ctx.clearRect(0, 0, ctx.width, ctx.height);
            var base_image=[];
            $('#' + id + ' > div').each(function () {
                 idPart = $(this).attr('id');
                 $('#' + idPart + ' >img').each(function () {
                 if(!$(this).hasClass( cssPartActive )){
                    $('#' + idPart + ' img:first-child').addClass(cssPartActive)
                 }
                });
            });
            DrawAvatar();
             $('#' + id + ' > div >img').css( 'cursor', 'pointer' );
             $('#' + id + ' > div >img').click(function(){
                $(this).parent().children('img').removeClass(cssPartActive);
                $(this).addClass(cssPartActive);
               
                $('.'+cssPartSelected).removeClass(cssPartSelected);
                 $(this).addClass(cssPartSelected);
                DrawAvatar();
            });
            function DrawAvatar(){
            cimgContext=0;
            $('#' + id + ' > div').each(function () {
                idPart = $(this).attr('id');
                $('#' + idPart + ' >img').each(function () {
                   if($(this).hasClass( cssPartActive )){
                     base_image[cimgContext] = new Image();
                     base_image[cimgContext].src = $(this).attr(attImageLarge);
                     base_image[cimgContext].enabled=true;
                     base_image[cimgContext].onload = function(){ctx.drawImage(this,0,0);}
                     cimgContext++;
                  }
                });
            });
			
			
          }
          function alterImage(imageObj,r,g,b){
            cvstmp = document.getElementById("tmpCanvas");
            var context= cvstmp.getContext("2d");
            context.clearRect(0, 0, cvstmp.width, cvstmp.height);
            context.drawImage(imageObj, 0, 0);
            var id= context.getImageData(0, 0, cvstmp.width, cvstmp.height);
            context.putImageData(id, 0, 0);
            ctx.drawImage(cvstmp, 0, 0);
          }
			$('#'+idDownload).click(function(){
				var dataURL = canvas.toDataURL('image/png');
				$('#'+idDownload).attr('href',dataURL);
				$('#'+idDownload).attr('download',"LFGO.png");
				
			});
	}
});