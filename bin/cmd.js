#!/usr/bin/env node
var toTokensString = require("../lib/cli");
var Readable = require('stream').Readable;
var concat = require('concat-stream');
var text = process.argv[2];
function stringToStream(string) {
    var s = new Readable();
    s.push(string);
    s.push(null);
    return s;
}
var input = text && text !== '-'
        ? stringToStream(text)
        : process.stdin
    ;
input.pipe(concat(function (buf) {
    toTokensString(buf.toString('utf8')).then(function (output) {
        console.log(output);
    });
}));