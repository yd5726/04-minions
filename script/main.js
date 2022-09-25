// ctrl+shift+f : 정리
window.addEventListener("DOMContentLoaded", function() {
	//3초(=3000ms) 뒤
	setTimeout(showAfterLoad, 3000);
	const POPUP = document.querySelector("#popup");
	const BODY = document.querySelector("body");
	const CLOSE = document.querySelector("#close");
	const POSTS = document.querySelector("#posts");

	function showAfterLoad() {
		//console.log(popupOuter); //디버깅할 때 자주 사용
		//console.dir(popupOuter); //디버깅할 때 자주 사용
		//$("#popup").css("display","block");
		//const POPUP = document.querySelector("#popup");
		POPUP.style.display = "block";
		//$("body").css("overflow","hidden");
		//const BODY = document.querySelector("body");
		//console.dir(BODY);
		BODY.style.overflow = "hidden";
	};
	/*
	$("#close").click(function(){
		// #popup을 보이지 않게 해줘.
		$("#popup").css("display","none");
		$("body").css("overflow","auto");
	});
	*/
	CLOSE.addEventListener("click", function() {
		POPUP.style.display = "none";
		BODY.style.overflow = "auto";
	});
	let postIndex = 0;
	// .prev 버튼을 누르면 현재 캐러셀 이미지 위치 조절
	const PREV = document.querySelector(".prev");
	PREV.addEventListener("click", function() {
		postIndex--;
		if (postIndex < 0) {
			postIndex = 2;
		}
		let coords = -920 * postIndex;
		POSTS.style.marginLeft = coords + "px";
	});
	const NEXT = document.querySelector(".next");
	NEXT.addEventListener("click", function() {
		postIndex++;
		if (postIndex > 2) {
			postIndex = 0;
		}
		let coords = -920 * postIndex;
		POSTS.style.marginLeft = coords + "px";
	});
});