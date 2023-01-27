# Getting and setting the URL another way

## \***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***

In last chapter we use window.location.href; to direct the browser to a new window.

Here's another way to do the same thing

`window.location.assign("https://www.google.com");`

This statement directs us to home page of google.com

With window.location.href statement, we can make url as detailed aas we like.
And with assign function, we cal also do that ->

`window.location.assign("https://www.google.com/users.html/#login");`

The above statement will direct us to the anchor tag #login on the users.html page of the google.com site

## \***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***

Here's another alternative that has slightely different effect.

`window.location.replace("https://www.google.com/users.html/#login");`

Once again, this statement directs the browser to new URL. But by using `replace` instead of `assign`, we interact with browser history. When we use `assign` the history is intact.
The statement takes user away from original page, she presses Backspace key or clicks the browser's back button, she goes back to the original page that she just came from.

But when we use `replace`, the original page doesn't make it into history.

If user presses Backspace after beign taken to new page, she's take n to page that diaplayed before original page since the original page is no longer in history. If there is noo page before original page, nothing happens when she presses Backspace.

---

To reload urrent page code one of these statements :

1. `window.location.reload(true);`
2. `window.location.reload(false);`
3. `window.location.reload();`

All above 3 staements helps to reload the page. If argument is `true` statement forces browser to load the page from server.
If argument is `false` or if there is no argument, the browser will load the page from the cache if the page has been cached.

## \***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\*** Coding Alternatives to be aware of

We can `window.location.href = window.location.href` of any of the abbreviated alternatives to reload the current page.
The reload is faster, but it doesn't allow you to specify whether browser reloads from the server or he cache.

`document.URL = document.URL` doesn't work.
