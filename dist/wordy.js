"use strict";
/**
 *
 * @param {string} count The number of words to return
 * @param {string} str The string to be sliced
 * @returns {string} Sliced string with "..." appended to it
 */
const subWords = (count, str) => {
    const wordArr = str.split(" ");
    if ((wordArr === null || wordArr === void 0 ? void 0 : wordArr.length) < count || count <= 0)
        return str;
    return wordArr.slice(0, count).join(" ").concat("...");
};
/**
 *
 * @param start The string to start selecting from
 * @param end The string to end at
 * @param str The string to perform the operation on
 * @returns The strings in between the start and end strings
 */
const wordsInBetween = (start, end, str) => {
    const startIndex = str.indexOf(start) + start.length;
    const endIndex = str.indexOf(end);
    return str.substring(startIndex, endIndex).trim();
};
String.prototype.subWords = function (count) {
    return subWords(count, this);
};
String.prototype.wordsInBetween = function (start, end) {
    return wordsInBetween(start, end, this);
};
