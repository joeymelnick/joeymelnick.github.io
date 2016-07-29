 var icons = document.getElementsByClassName('social-icon');

 
var footer = document.getElementsByClassName('footer')
var openOrClose = 'open';	



footer[0].onclick = function(){
if (openOrClose === 'open'){
	for(i=0; i < icons.length; i++){
		var socialId = "social-move" + (i+1);
  icons[i].setAttribute('id', socialId);
  icons[i].style.opacity = 1;
}
  openOrClose = 'close'
}

else {
	for(i=0; i < icons.length; i++){
	
  icons[i].setAttribute('id', '');
    icons[i].style.opacity = 0;
}
	openOrClose = 'open';
}

 
};

  $(document).ready(function(){
          
        $('.bike-icon').click(function(){
            $('.click').toggleClass('flip');
          });
               });
