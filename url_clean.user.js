// ==UserScript==
// @name        URL Clean
// @description Clean / minimuze large URLs
// @license     BSD 3-Clause
// @author      Duckle29
// @namespace   https://github.com/Duckle29
// @run-at      document-start
// @icon        https://avatars3.githubusercontent.com/u/2756925?v=3&s=200
// @homepageURL https://github.com/Duckle29/url_clean
// @downloadURL https://raw.githubusercontent.com/Duckle29/url_clean/master/url_clean.user.js
// @updateURL   https://raw.githubusercontent.com/Duckle29/url_clean/master/url_clean.user.js
// @version     1.0
//
// @include     /^https?:\/\/([a-zA-Z]{2,3}\.)?aliexpress\.com\/(item|store\/product)\/.*/
// @include     /^(https?:\/\/(?:www\.)?ebay\.(?:(?:co.)?[a-zA-Z]{2,3})\/itm)/
// @history     1.0 Initial release
// ==/UserScript==

(function() 
{
  'use strict';
  var sites = 
  [
    /^(https?:\/\/(?:www\.)?ebay\.(?:(?:co.)?[a-zA-Z]{2,3})\/itm)(?:\/[0-9a-zA-Z\-]+)(\/\d+)/,
    /^(https?:\/\/(?:[a-zA-Z]{2,3}\.)?aliexpress.com\/(?:item|store\/product))(\/[0-9_]+[.]html(?=$|[?]))/
  ];

  sites.forEach(regReplace)

  function regReplace(expression)
  {
    var groups = window.location.href.match(expression)
    
    if (groups == null)
    {
      return
    }

    if (groups.length === 3 && groups[1]+groups[2] != window.location.href)
    {
      history.replaceState(null, '', groups[1]+groups[2]);
    }
  }

})();

