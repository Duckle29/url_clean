// ==UserScript==
// @name        URL Clean
// @description Clean / minimize large URLs by stripping tracking info
// @license     BSD 3-Clause
// @author      Duckle29
// @namespace   https://github.com/Duckle29
// @run-at      document-start
// @icon        https://avatars3.githubusercontent.com/u/2756925?v=3&s=200
// @homepageURL https://github.com/Duckle29/url_clean
// @downloadURL https://github.com/Duckle29/url_clean/raw/main/url_clean.user.js
// @updateURL   https://github.com/Duckle29/url_clean/raw/main/url_clean.user.js
// @version     1.1
//
// @include     /^https?:\/\/(?:www\.)?([a-zA-Z]{2,3}\.)?aliexpress\.com\/(item|store\/product)\/.*/
// @include     /^https?:\/\/(?:www\.)?ebay\.(?:co.)?[a-zA-Z]{2,3}\/itm/
// @include     /^https?:\/\/(?:www\.)?amazon\.(?:co.)?[a-zA-Z]{2,3}\/
// @history     1.1 Added Amazon
// @history     1.0 Initial release
// ==/UserScript==

(function() 
{
  'use strict';
  var sites = 
  [
    /^(https?:\/\/(?:www\.)?ebay\.(?:(?:co.)?[a-zA-Z]{2,3})\/itm)(?:\/[0-9a-zA-Z\-]+)(\/\d+)/,
    /^(https?:\/\/(?:[a-zA-Z]{2,3}\.)?aliexpress.com\/(?:item|store\/product))(\/[0-9_]+[.]html(?=$|[?]))/,
    /^(https?:\/\/(?:www\.)?amazon\.(?:co.)?[a-zA-Z]{2,3}\/.*\/dp\/)(.*)\//
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