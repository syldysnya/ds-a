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


`key =  {
	'1': ['a','b'],
  '2': ['c','d' .. ].length = 12
}

string = '121'


[
	'aca',
  'acb',
  'ada',
  'adb',
  ...
]

[ aca, acb, ada, adb, bca, bcb, bda, bdb ]
  000  001  010  011  100  101  110  111
 
 start -> 000 -> 001 -> 010
 
 string = '122'
 
 [ acc, acd, adc, add, bcc, bcd, bdc, bdd ]
   000  001  010  011  100  101  110  111
   
   start -> 000
   end   -> 111
   
  +1 -> move 1 left -> +1 -> move 1 left -> +1
  												 ['a','b']											['c','d' .. ].length = 12
								 '121'
                [0,0,0] -> [0,0,1] -> [0,0,2] -> [0,0,0] -> [0,1,0] -> [0,1,1] -> [0,1,2] -> [0,1,0] -> [0,2,0] -> [0,0,0]    -> [1,0,0] 
                								|          |									 |						|					 |					| 			 |	 				|
                                ?					 ?									 ?					add	1		out of bound	reset	  add one	 Out of bound			 	 
  current = 100
  
  1: 2
  2: 1
  
  '12' => arr.length = 4
  '121' || '122' => arr.length = 2 exponent 3 => 2 * 2 * 2  ;
  
  1.length = 2;
  2.length = 12;
  
  '12' => 2 * 12
  '121' || '122' => 2 * 12 * 2 || 2 * 12 * 12;
  
  [000, 000, 000, 000, 000, 000, 000, 000];
  
  function findCombos(obj, string) {
  	let startArr = new Array(string.length).fill(0);
    let currArr = startArr; // [0, 0, 0]
    let arr = [];
    
    for (let i = 0; i < string.length; i++) {
    	// '121' obj = { '1': ['a','b'], '2': ['c','d'] } startArr = [0, 0, 0]
      let idx = startArr.length - 1; // 2
      startArr[idx] += 1; // 2
      
      while*(
      	if (isInBound(startArr[idx])) {
      		arr.push(startArr);
          startArr[idx] += 1;
      	} else {
      		startArr = currentArr;
        }
     	https://leetcode.com/problems/letter-combinations-of-a-phone-number/
      }
    }
  }
`