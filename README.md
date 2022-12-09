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

or [From greasy fork](https://greasyfork.org/en/scripts/416627-url-clean)

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

---

## Adding more sites
Here's the steps to add another site

First, open https://regex101.com and pick javascript flavor. It's a great tool to debug regex :)

Add some regex in the userscript data to let it work on the site in question. I tend to use as specific regex as possible, and not have the script run on pages that it doesn't make sense to.

As an example with aliexpress, we only want to clean urls on product pages, so we restrict it to those urls:
```
// @include     /^https?:\/\/(?:www\.)?([a-zA-Z]{2,3}\.)?aliexpress\.com\/(item|store\/product)\/.*/
```
Piece by piece:
https
with or without `www.`
with or without a country code `([a-zA-Z]{2,3}\.)?`
aliexpress.com/ either `item` or `store/product`
`.*` any thing else

Oh and there's a / / around the regex

Then we add a matching regex with relevant groups in the sites list.
Here we want to end up with two matching groups. One that matches the main url, and one that matches the relevant stuff to get to the item

for example: 

```
https://www.aliexpress.com/item/1005003975161015.html?pdp_ext_f=%7B%22ship_from%22:%22CN%22,%22sku_id%22:%2212000029 ...and more
```
here we only want everything before the ? which. could be fairly simple regex, but I like complex breakable things so I went for this:

```
(https?:\/\/(?:[a-zA-Z]{2,3}\.)?aliexpress.com\/(?:item|store\/product))(\/[0-9_]+[.]html(?=$|[?]))
```

this has two groups which can be hard to see. The `(https?:\/\/(?:[a-zA-Z]{2,3}\.)?aliexpress.com\/(?:item|store\/product))` group and the `(\/[0-9_]+[.]html(?=$|[?]))` group

the resulting url will be group1 + group2

Honestly I can't remember why I did it like this. That seems like pointlessly complicated regex, it even has positive lookahead at the end to look for the url ending or ending in `?`

*shrug*

but that's the idea. Will gladly accept PRs for more sites

