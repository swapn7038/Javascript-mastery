# Testing for popup blockers

Js popups, and especially those that open a new page within the same website, are often tolerated by default, but you can never be sure.

If popups are essential feature of your site, you need to test whether popups are going to be blocked. If they are, you can ask user to disable popup blocker for your site.

The test is pretty intelegant. You attempt to open a small test popup, then quickly close it -- so fast that the user may not notice the little screen flash. If the attempt succeeds, the window's handle will have a value.

If popup is blocked, the handle will be null, and you can deliver your message to the user.

---

function checkForPopBlocker(){
var testPop = window.open(" ", "", "width=100, height=100");
if(testPop === null) {
alert("Please disable your popup blocker.");
}
testPop.close();
}

---

The above function will not work with IE. In IE, if popup is blocked, the handle will be undefined instead of null. So to cover all bases, you need to code the function this way :

function checkForPopBlocker(){
var testPop = window.open("", "", "width=100, height=100");
if(testPop === null || typeof(testof(testPop === "undefined"){
alert("Please disable your popup blocker.");
}))
testPop.class();
}
