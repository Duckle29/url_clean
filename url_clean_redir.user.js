// ==UserScript==
// @name        URL Clean, with redirect
// @description Clean / minimize large URLs by stripping tracking info. This version redirect to remove sub domains
// @license     BSD 3-Clause
// @author      Duckle29
// @namespace   https://github.com/Duckle29
// @run-at      document-start
// @icon        https://avatars3.githubusercontent.com/u/2756925?v=3&s=200
// @homepageURL https://github.com/Duckle29/url_clean
// @downloadURL https://github.com/Duckle29/url_clean/raw/main/url_clean_redir.user.js
// @updateURL   https://github.com/Duckle29/url_clean/raw/main/url_clean_redir.user.js
// @version     1.1.5
//
// @include     /^https?:\/\/(?:www\.)?([a-zA-Z]{2,3}\.)?rs-online\.com\/web\/p\/.*/
// @include     /^https?:\/\/(?:www\.)?([a-zA-Z]{1,3}\.)?aliexpress\.com\/(item|store\/product)\/.*/
// @include     /^https?:\/\/(?:www\.)?ebay\.(?:co.)?[a-zA-Z]{2,3}\/itm.*/
// @include     /^https?:\/\/(?:www\.)?amazon\.(?:co.)?[a-zA-Z]{2,3}\/.*/
// @history     1.1.5 Added redirect version of script
// @history     1.1.4 Added RS online
// @history     1.1.3 Fixed regex replace for ebay
// @history     1.1.2 Fixed regex to match URL encoding
// @history     1.1.1 Fixed regex for Amazon
// @history     1.1 Added Amazon
// @history     1.0 Initial release
// ==/UserScript==

(function()
{
  'use strict';
  let sites =
  [
    [/^(https?:\/\/(?:www\.)?(?:[a-zA-Z]{2,3}\.)?rs-online\.com\/web\/p\/[^\/]*\/)(\d*)/, [1, 2]],
    [/^(https?:\/\/(?:www\.)?ebay\.(?:(?:co.)?[a-zA-Z]{2,3})\/itm)(?:\/[0-9a-zA-Z%\-]+)*(\/\d+)/, [1, 2]],
    [/^(https?:\/\/)(?:[a-zA-Z]{1,3}\.)?(aliexpress.com\/(?:item|store\/product))(\/[0-9_]+[.]html(?=$|[?]))/, [1, 2, 3]],
    [/^(https?:\/\/(?:www\.)?amazon\.(?:co.)?[a-zA-Z%]{2,3}\/.*\/dp\/)(.*)(?:\\)?\?/, [1, 2]]
  ];


  for (let i=0; i<sites.length; i++)
  {
    regReplace(sites[i][0], sites[i][1])
  }

  function regReplace(expression, combination)
  {
    let groups = window.location.href.match(expression)

    if (groups == null)
    {
      return
    }

    if (groups.length < Math.max(...combination))
    {
      return
    }

    let cleaned_url = ""
    for (let k=0; k<combination.length; k++)
    {
      cleaned_url += groups[combination[k]]
    }

    let browser_url = window.location.href

    // If the site has inserted 'www.' don't infinitely loop trying to remove it.
    if (browser_url.split('.')[0].includes('www') && Math.abs(browser_url.length - cleaned_url.length) === 4)
    {
      return
    }

    if (cleaned_url != browser_url)
    {
      try
      {
        history.replaceState(null, '', cleaned_url);
      }
      catch(err)
      {
        if (err instanceof DOMException)
        {
          window.location.replace(cleaned_url);
        }
      }
    }
  }

})();
