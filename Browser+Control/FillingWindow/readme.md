# Filling the window with content

This chapter is about create and fill window with content.

In windowq.html code opens blank window of maximum size and give it handle, a variable that refers to this particular windoe -> in this case monkeyWindow.

It deoends on browser, the opening position of new window, where it is new tab, on same page or even in new copy of the browser. We can't control this.

---

Fill the window

There are 3 methods to fill the window

1. We can use `write` method to put HTML content on screen...
2. Second way to fill the window with content is to assign a document to it, as you learned to do in previous chapter.
   monkeyWindow.location.assign("https://www.animaks.com/capuchun.html");
   or
   monkeyWindow.location.assign = "https://www.animaks.com/capuchun.html";
3. Third and most common way to fill window with content is to include document assignment in statement that opens window:

var monkeyWindow = window.open("https://www.google.com");

---

If the document you're opoening in the popup shares same host and directory as the original document, we can just write...

var monkeyWindow = window.open("caption.html");

This is how we can close a window ->
monkeyWindow.close();
