/**
 * 
 * @param {string} count The number of words to return
 * @param {string} str The string to be sliced
 * @returns {string} Sliced string with "..." appended to it
 */
const subWords = (count: number, str: string ): string => {
    const wordArr = str.split(" ")
    if(wordArr?.length < count || count <= 0) return str
    return wordArr.slice(0, count).join(" ").concat("...")
}

/**
 * 
 * @param start The string to start selecting from
 * @param end The string to end at
 * @param str The string to perform the operation on
 * @returns The strings in between the start and end strings
 */
const wordsInBetween = (start: string, end: string, str: string): string => {
    const startIndex = str.indexOf(start) + start.length
    const endIndex = str.indexOf(end)
    return str.substring(startIndex, endIndex).trim()
}

interface String {
    subWords: (count: number) => string,
    wordsInBetween: (start: string, end: string) => string
}

String.prototype.subWords = function (count: number) {
    return subWords(count, this as string)
}

String.prototype.wordsInBetween = function (start: string, end: string) {
    return wordsInBetween(start, end, this as string)
}
