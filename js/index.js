/*
 *
 * This is a simple sample.
 *  
 */

////////////////////////////////////////////////////////////////////////////////
// function ShowQRCode(url){
//     jQuery('#qrcode').qrcode(url);
// };

// function ShowTitle(title){
//     jQuery('#title').html(title);
// };

// function OnShowQRCode(){
//     // Get active tab and retrive url and title.
//     browser.tabs.query({ currentWindow: true, active: true }, function(tabs){
//         var url = tabs[0].url;
//         var title = tabs[0].title;
//         ShowQRCode(url); 
//         ShowTitle(title);       
//     });
// };
////////////////////////////////////////////////////////////////////////////////

// Event binding.
function test(){
	console.log("start coloring")
	document.body.style.backgroundColor="red";
	for(i=0;i<10;i++){
		console.log("hello world");
	}
	console.log("success");
}
document.addEventListener("pageshow", test()); 