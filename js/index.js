 var icons = document.getElementsByClassName('social-icon');

 
var footer = document.getElementsByClassName('footer')
var openOrClose = 'open';	



footer[0].onclick = function(){
if (openOrClose === 'open'){
	for(i=0; i < icons.length; i++){
		var socialId = "social-move" + (i+1);
  icons[i].setAttribute('id', socialId);
}
  openOrClose = 'close'
}

else {
	for(i=0; i < icons.length; i++){
	
  icons[i].setAttribute('id', '');
}
	openOrClose = 'open';
}

 
};

