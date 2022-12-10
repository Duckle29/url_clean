# URL Clean
Cleans and minimizes urls for prettier sharing in text chats and some tracker stripping (when shared)

The script was initially made by a user in #reprap on freenode IRC for AliExpress, but I sadly have forgotten by who :(

After almost loosing this userscript >10 times, to find it on weird nas drives or old computers,
I decided to rewrite it entirely from scratch and share it on my github / greasyfork

The script now supports multiple sites, likely to have more added in the future.

---
## Example
The script will take a url like 
```
https://www.aliexpress.com/item/32322326979.html?spm=a2g0o.productlist.0.0.5e2e3f351UcucB&algo_pvid=9ac0e00d-f02c-4d7b-8acd-03d1455be4da&algo_expid=9ac0e00d-f02c-4d7b-8acd-03d1455be4da-1&btsid=0bb0623e16061356267071699ec21e&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_
```
and clean it to
```
https://www.aliexpress.com/item/32322326979.html
```

---
## Installation

If you have a userscript plugin like:

  - [Violentmonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/)
  - [Violentmonkey for Chrome](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag)
  - [Greasemonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)
  - [Tampermonkey for Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

Then you can **[install it](https://github.com/Duckle29/url_clean/raw/main/url_clean.user.js)**

Due to security limitations. A redirect is required to clear out sub-domains. I have separated that into a separate script, as some people might not want redirects, or might want to use localized sites (it.aliexpress for italy for example) If you like me DO want redirects  
Then you can **[Install with redirects](https://github.com/Duckle29/url_clean/raw/main/url_clean_redir.user.js)**

---

## Supported sites 

 - AliExpress
 - Ebay
 - Amazon

---

## Known issues
While it'd be nice to also clean up localization like country specific sub-domains, this can't be
done in javascript as it represents a CORS attack risk. It coud be done with redirects, and I'll happily 
look at a PR if anyone is up for that :)

