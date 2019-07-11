(function(){
	var calc = function(){
		var rem = document.documentElement.clientWidth/10;
		document.documentElement.style.fontSize = rem + 'px';
		rem = document.documentElement.clientWidth > 750?37.5:rem;
		console.log(rem);
	}
	calc();
	window.addEventListener('resize',calc);
})();