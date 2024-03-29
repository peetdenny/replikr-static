﻿var HashSearch = new function () {
    var params;

    this.set = function (key, value) {
        params[key] = value;
        this.push();
    };

    this.remove = function (key, value) {
        delete params[key];
        this.push();
    };


    this.get = function (key, value) {
        return params[key];
    };

    this.keyExists = function (key) {
        return params.hasOwnProperty(key);
    };

    this.push = function () {
        var hashBuilder = [], key, value;

        for (key in params) if (params.hasOwnProperty(key)) {
            key = escape(key), value = escape(params[key]); // escape(undefined) == "undefined"
            hashBuilder.push(key + ((value !== "undefined") ? '=' + value : ""));
        }

        window.location.hash = hashBuilder.join("&");
    };

    (this.load = function () {
        params = {}
        var hashStr = window.location.hash, hashArray, keyVal
        hashStr = hashStr.substring(1, hashStr.length);
        hashArray = hashStr.split('&');

        for (var i = 0; i < hashArray.length; i++) {
            keyVal = hashArray[i].split('=');
            params[unescape(keyVal[0])] = (typeof keyVal[1] != "undefined") ? unescape(keyVal[1]) : keyVal[1];
        }
    })();
}

jQuery(function ($) {
    $(".feed-body").tweet({
        count: 5,
        username: "replikr",
        loading_text: "searching twitter..."
    });

    if (HashSearch.keyExists("home")) {
        $(".menu li").removeClass("current-menu");
        $(".home").addClass("current-menu");
    }
    if (HashSearch.keyExists("contact")) {
        $(".menu li").removeClass("current-menu");
        $(".contactlink").addClass("current-menu");
    }

    $(".menu li").bind("click", function (e) {
        var current = $(e.target).parent();
        $(".menu li").removeClass("current-menu");
        current.addClass("current-menu");
    });
});