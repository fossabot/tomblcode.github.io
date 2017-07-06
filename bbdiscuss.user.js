// ==UserScript==
// @name         Bring back discuss
// @namespace    http://bybbworld.com
// @version      1.0
// @description  Bring back the Discuss button.
// @author       bybb
// @match        https://scratch.mit.edu/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    if (document.getElementsByClassName("site-nav")[0]) {
        var exploreLink = document.getElementsByClassName("site-nav")[0].children[1];
        exploreLink.innerHTML = "<a href=\"/discuss/\">Discuss</a>";
    } else {
        var exploreLink = document.getElementsByClassName("explore")[0];
        exploreLink.innerHTML = "<a href=\"/discuss/\"><span>Discuss</span></a>";
    }
})();
