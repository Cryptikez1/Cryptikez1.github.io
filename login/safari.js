// Safari doesn't support flexbox row-gap/column-gap. Yay!
if (navigator.userAgent.match(/Version\/(\d+)/i)?.[1] <= 14) {
	alert("Your Safari is outdated and doesn't support CSS Gap properties. Some elements may appear broken")
}
