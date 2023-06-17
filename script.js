// complete the given function

function palindrome(str){
	const strr = str.split('').reverse().join('');
	alert(str.toLowerCase());
	if(str === strr){ 
		return true;
	}
	return false;
}

let res = palindrome("Racecar")
console.log(res);

module.exports = palindrome
