# URL Clean
cleans and minimizes urls for prettier copy/paste and some tracker stripping 

The script was initially made by a user in #reprap on freenode IRC for AliExpress, but I sadly have forgotten by who :(

After almost loosing this userscript >10 times, to find it on weird nas drives or old computers,
I decided to put it in a place I could find again.

I cleaned up the script, added auto-update support and added more sites.

---
## Installation

If you have a userscript plugin like:

  - [Violentmonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/)
  - [Violentmonkey for Chrome](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag)
  - [Greasemonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)
  - [Tampermonkey for Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

Then you can **[install it](https://raw.githubusercontent.com/Duckle29/url_clean/master/url_clean.user.js)**  

---

## Supported sites 

 - AliExpress
 - Ebay

---

## Known issues
While it'd be nice to also clean up localization like country specific sub-domains, this can't be
done in javascript as it represents a CORS attack risk. It coud be done with redirects, and I'll happily 
look at a PR if anyone is up for that :)