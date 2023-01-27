# Getting and Setting URL

We can use js to control browser.
To start, we can get browser to tell us its current location.

`var whereAreWe = window.location.href;`

Suppose we are at https://www.google.com/page35/#login
the above statemt will assign string to variable whereAreWe.

We can also get pieces of these.
Below statement gets just the domain name.

`var theDomain = window.location.hostname;`

From above ex the domain www.google.com will get assigned to the theDomain variable.
Here "https://", path and the anchor will get omitted.

Now suppose we need the path, following line will be used

`var thePath = window.location.pathname;`

In thePath variable page35/#login will get stored.

If the browser were on the home page and the URL were simply https://www.google.com,
the string "/" would be assigned to the variable.

In above example, browser has been pointed to a section of the page marked by the anchor #login. This statement identifies anchor

`var theAnchor = window.location.hash;`

The string "#login" is assigned to the variable theAnchor. If there is no anchor in URL, the variavle is assigned an empty string, "".

---

As usual, we can reverse the order of things, telling the browser where to go instead of asking where it is.

`window.location.href = "https://www.ditms.org/1.html";`

Above statement tells the browser to navigete to the page name 1.html at the site ditms.org.

If we want the browser to navigate to the site's home page, we have to write

`window.location.href = "https://www.ditms.org";`

and if we want it to land on anchor

`window.location.href = "https://www.ditms.org/#login";`

---

## img

We can omit window. It's legal to use location.href, location.hostname, location.pathname and location.hash.
It's more common to include window.

We can omit href where we're detecting the URL. It's legal to use window.location, or simply location.
Including href is preferred for esoteric reasons.

We can use document.URL as alternative to window.location.href

There are two more ways to direct browser to url, alternatives to window.location.href.
--> Next chapter
