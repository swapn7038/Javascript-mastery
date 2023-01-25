# Developer Tools

### What can developer tools do

1. Create files
2. Write code
3. Persist changes to Disk
4. Step through debug
5. Audit pages
6. Emulate devices
7. Simulate network conditions
8. Find and Fix Memory leaks
9. Analyze js performance
10. Spot page jank

Resources
https://developers.google.com/web/tools/chrome-devtools/

What is Emulation?

==>

CSS Specificity
Breakpoints
Conditional Breakpoints
XHR Breakpoints
Blackboxing scripts
How important is load time?
Google -> +500ms speed decreases -> -20% traffic loss
Yahoo -> +400ms speed decreases -> 5-9% full page traffic loss (visitor left before page finished loading)
Amazon -> +100ms speed decreases -> 1% sales loss

What is mean by Audit?
=>

Common Audit Peoblems ->

1. Combine external css and js
2. Enable gzip compression (Apache, Node, WordPress)
3. Compress images (imageoptim.com)
4. Leverage Browser Caching
5. Put CSS in document head
6. Unused CSS rules (Old css that can be pruned)

PageSpeed Insights
Network
Terminology

Queuing ->
If a request is queued it indicated that:
• request was postponed by the rendering engine, coz its considered lower priority than critical resources (such as scripts/styles), often happen with images.
• request may be put on hold to wait for an unavailable TCP socket that's about to free up.
• request may put on hold coz browser only allows six TCP connections per origin on HTTP 1.
• Time spent making disk cache entries (typically very quick).

Stalled / Blocking
• Time request spend waiting before it could be sent. It can be waiting for any of the reasons described for Queueing. Additionally, this time is inclusive of any time spent in proxy negotiation.

Proxy Negotiation
• Time spent negotiationg with a proxy server connection.

DNS Lookup
• Time spent performing DNS Loopup. Every new domain on a page requires a full roundtrip to do DNS lookup.

Initial Connection / Connecting
• Time it took to establish a connection, including TCP handshakes / retries and negotiationg a SSL.

SSL
• Time spend completing a SSL handshake.

Queued or Stalled
This indicates that too many resources are being retrieved
from a single client. On HTTP 1.0/1.1 connections, Chrome
enforces a maximum of six TCP connections per host.

Slow Time to First Byte

1. Bad network conditions between client and server, or
2. A slowly responding server application

---

Most devices today refresh their
screens 60 times a second. The browser
needs to match the device’s refresh
rate and put up 1 new picture, or frame,
for each of those screen refreshes.

Each of those frames has a budget of just over
16ms (1 second / 60 = 16.66ms). In reality,
however, the browser has housekeeping work
to do, so all of your work needs to be
completed inside 10ms.

Window.requestAnimationFrame()
