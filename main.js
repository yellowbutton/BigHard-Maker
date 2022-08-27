// ==UserScript==
// @name         Bighard Maker
// @run-at document-start
// @namespace    http://yxzl.top/
// @version      1.1
// @description  将任意网站变成巨硬（Windows10）风格。
// @author       Iron_Grey_
// @require      https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.2.1/jquery.min.js
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    // $("*").css("border-radius","0%");
    $("*").css("border-radius","1px");
    var val = "<style type='text/css'>*{border-radius:1px !important;border-bottom-left-radius:1px !important;border-bottom-right-radius:1px !important;border-top-right-radius:1px !important;border-top-left-radius:1px !important;}*::after{border-radius:1px !important;border-bottom-left-radius:1px !important;border-bottom-right-radius:1px !important;border-top-right-radius:1px !important;border-top-left-radius:1px !important;}*::before{border-radius:1px !important;border-bottom-left-radius:1px !important;border-bottom-right-radius:1px !important;border-top-right-radius:1px !important;border-top-left-radius:1px !important;}*.change{border-radius:1px !important;border-bottom-left-radius:1px !important;border-bottom-right-radius:1px !important;border-top-right-radius:1px !important;border-top-left-radius:1px !important;}*.change::after{border-radius:1px !important;border-bottom-left-radius:1px !important;border-bottom-right-radius:1px !important;border-top-right-radius:1px !important;border-top-left-radius:1px !important;}*.chage::before{border-radius:1px !important;border-bottom-left-radius:1px !important;border-bottom-right-radius:1px !important;border-top-right-radius:1px !important;border-top-left-radius:1px !important;}</style>";
    // *[style*='blur'][style*='filter']{filter: blur(0px) !important;filter: brightness(20%) !important;}*[style*='blur'][style*='backdrop-filter']{backdrop-filter: blur(0px) !important;backdrop-filter: brightness(20%) !important;}
    $("body").append(val);
    $("*").addClass("tobighardchange");
    // $("*").removeAttribute('style');
    setInterval(function(){$("*").css("border-radius","1px");$("*").addClass("tobighardchange");},50);
    // setInterval(function(){$("*:after").css("border-radius","1px")},100);
    'use strict';
    // Your code here...
})();
