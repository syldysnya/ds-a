const groupAnagrams = (words) => {
	let arrOfObjects = []; // [{ yo: {y: 1, o: 1}, act: {a: 1, c: 1, t: 1}, oy: {o: 1, y: 1}]

	for (i = 0; i < words.length; i++) { // words[i] = oy // n = words.length
	    let stringObj = {}; // {oy: {o: 1, y: 1}}
        let key = words[i]; // 
	    stringObj[key] = {}; 
	
	    for (j = 0; j < key.length; j++) { // key[j] = o // m = key.length
            if (stringObj[key][key[j]]) { // stringObj[oy][o]
                stringObj[key][key[j]] += 1
            } else {
                stringObj[key][key[j]] = 1
            }
        }
        arrOfObjects.push(stringObj)
    } // O(n) * O(m)
    // [{yo: { y: 1, o: 1}}, {act: {a: 1, c: 1, t: 1}}, {oy: {o: 1, y: 1}}]
    let anagrams = {}; // { {y: 1, o: 1}: [yo, oy], {a: 1, c: 1, t: 1}: [act],  }

    for (i = 0; i < arrOfObjects.length; i++) {  // [{ yo: {y: 1, o: 1}, act: {a: 1, c: 1, t: 1}, oy: {o: 1, y: 1}] // k = arrOfObjects.length
        let strObj = arrOfObjects[i]; // { yo: {y: 1, o: 1}
        let k = Object.keys(strObj)[0]; // k = yo
        let v = Object.values(strObj)[0]; // v = {y: 1, o: 1}
        
	    if (!anagrams[v]) {
	        anagrams[k] = v
        } else {
            anagrams[k] = anagrams[v].concat([k])	
        }
    } // O(k)

// { { y: 1, o: 1}: [yo, oy] }
    console.log(anagrams)
    return Object.values(anagrams)
}

const words = ['yo', 'act', 'oy'];
console.log(groupAnagrams(words))

