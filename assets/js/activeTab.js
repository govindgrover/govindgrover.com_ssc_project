/*
*   By - Govind Grover
*       class - X
*/

window.addEventListener("load", activeTab);

function activeTab()
{
	var title = document.title;
	var btnNav = document.querySelectorAll(".g-nav-btn");

	[].forEach.call(btnNav, function (e) {
		if (title == e.innerText) {
			e.style.backgroundColor = "var(--info)";
			e.style.textDecoration = "underline";
			e.style.transform = "scale(1.2)";
			e.style.fontSize = "15px";
		}
	});
}
