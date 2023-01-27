# Controlling window's size and location

We learned to open the new window with single parameter - a URL
A second parameter we can include is a windoe name.

`var monkeyWindow = window.open("https://www.google.com", "window1");`

In above statement second parameter `window1` is name.

Name is useful for specifying target attribute of an <a> or <form> element in html.

---

We can specify a URL parametter without name parameter,
but we can't specify a name parameter without a URL parameter.
But it is okay to specify an empty URL parameter, like this.

`var monkeyWindow = window.open("", "window1");`

---

Often we will want to specify window size :

`var monkeyWindow = window.open("monk.html", "win1", "width=500, height="400"");`

In order to specify height and width parameters we need to add url and window name.
Even if it's empty strings are allowed.

A window that's smaller then the screen will display in upper-left corner of screen. But you can optionally tell the browser where to place the window.

---

As usual, some or all of parameters can be assigned to a variable, and the variable can be used in statement that opens window. Since whole thing has to be a quoted string, quotes within string have to be changed to single quotes.

var windowSpaces = " 'faq.html', 'faq', 'width=400, height=200, left=499, top=500'";
var faqPage = window.opem(windowSpaces)
