(function(){

	var selectMenu = document.getElementById('animationSelect');
	var animateTarget = document.getElementById('animateTarget');
	var button = document.getElementById('animationStart');

	function runAnimation(){
		var animateClass = selectMenu.value;
		animateTarget.className="";

		// This is so the above call can reset the class, allowing the same animation to be run again
		setTimeout(function(){
			animateTarget.className=animateClass
		},5)
	}

	selectMenu.addEventListener('change', runAnimation);
	button.addEventListener('click', runAnimation);

})();