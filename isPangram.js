/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
    const obj = {};
    for (const letter of sentence) {
        if (obj[letter] !== undefined)
            obj[letter] = 1
        else
            obj[letter]++;
    }
    return Object.keys(obj).length === 26;
};

// let map = {}

// for (let char in sentence) {
//     console.log(map)
//     if (map[char] !== null) {
//         map[char] = 1
//     }
//     else{ 
//         map[char] ++
//     }
// }
// return Object.keys(map).length === 26



/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
    const set = new Set();
    [...sentence].forEach(ch => set.add(ch))
    return set.size === 26;
};