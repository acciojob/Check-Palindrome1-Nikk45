// complete the given function

function palindrome(str){
	const strr = str.split('').reverse().join('');
	// alert(str);
	if(str === strr){ 
		return "true";
	}
	return "false";
}

let res = palindrome("racecar")
console.log(res);

module.exports = palindrome
