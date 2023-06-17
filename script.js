// complete the given function

function palindrome(str){
	const strr = str.split('').reverse().join('').toLowerCase();
	// alert(strr);
	if(str === strr){ 
		return true;
	}
	return false;
}

let res = palindrome("Racecar")
console.log(res);

module.exports = palindrome
