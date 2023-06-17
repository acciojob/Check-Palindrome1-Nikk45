// complete the given function

function palindrome(str){
	let strr = str.split(',').reverese().join("");
	str === strr? console.log(true) : console.log(false);
}
module.exports = palindrome
