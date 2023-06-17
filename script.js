// complete the given function

function palindrome(str){
	const strr = str.split('').reverse().join('');
	// alert(str);
	if(str === strr){ 
		return "true";
	}
	return "false";
}

module.exports = palindrome
