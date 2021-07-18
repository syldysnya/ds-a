'1736. Latest Time by Replacing Hidden Digits'

var maximumTime = function(time) {
    let hours = time.split(":")[0].split('');
    let mins = time.split(':')[1].split('');
    
    hours = hours[0] === '?' && hours[1] === '?' ? ['2', '3'] : hours;
    hours[0] = hours[0] === '?' && parseInt(hours[1]) > 3 ? '1' : hours[0];
    hours[0] = hours[0] === '?' && parseInt(hours[1]) <= 3 ? '2' : hours[0];
    hours[1] = hours[1] === '?' && hours[0] === '2' ? '3' : hours[1];
    hours[1] = hours[1] === '?' && hours[0] !== '2' ? '9' : hours[1];
    mins[0] = mins[0] === '?' ? '5' : mins[0];
    mins[1] = mins[1] === '?' ? '9' : mins[1];
    
    return hours.join('') + ':' + mins.join('')
};

'263. Ugly Number'

var isUgly = function(n) {
    let factors = [2, 3, 5]
    
    for (let i = 0; i < factors.length && n > 1; i++) {
        while (n % factors[i] === 0) {
            n /= factors[i]
        }  
    }
    
    return n === 1
};

'66. Plus One'

var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) { // [9, 9] i = 1
        let ele = digits[i]; // 9
        
        if (ele === 9) digits[i] = 0; // 0
        else {
            digits[i]++;
            return digits
        }
    }
    digits.unshift(1);
    return digits    
};