// complete the given function

function palindrome(str){
	let strr = str.split(',').reverese().join("");
	str === strr? return true : return false;
}

palindrome(racecar);

module.exports = palindrome
