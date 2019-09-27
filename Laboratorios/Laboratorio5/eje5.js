var palindrome = "eevee";

var funcionPalindromo = palindrome =>{
    var spaces = /[\W_]/g;
    let temp = palindrome.replace(spaces,'');
    let split = temp.split('');
    let rev = split.reverse().join('');
    if (rev == temp){
        return true;
    }else{
        return false;
    }
}

funcionPalindromo(palindrome);
