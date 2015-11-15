// LICENSE : MIT
"use strict";
var getTokenizer = require("kuromojin").getTokenizer;

function toTokensString(text) {
    return getTokenizer().then(function (tokenizer) {
        var tokens = tokenizer.tokenize(text);
        return JSON.stringify(tokens, null, 4);
    });
}
module.exports = toTokensString;