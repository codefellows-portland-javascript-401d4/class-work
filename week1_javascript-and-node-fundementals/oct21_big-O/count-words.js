
function countWords(sentence) {
    const words = sentence.split(' ');
    return words.reduce((hash, item) => {
        if(hash.hasOwnProperty(item)) {
            hash[item]++;
        }
        else {
            hash[item] = 1;
        }
        return hash;
    }, {});
}