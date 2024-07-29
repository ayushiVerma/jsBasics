// TWO POINTER

// 680. Valid Palindrome II
// Easy
// Topics
// Companies
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false
 

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {boolean}
 */
// var validPalindrome = function(s) {
   
//     let stringLength = s.split('').length;

   
//     let str = '';
//     for(let i = 0 ; i< stringLength; i++){
//         let t = s.split('');
//         t.splice(i, 1);
//         str = t.join('');
//         strRev = [...str].reverse().join('');
//        if(str === strRev){
//         return true;
//        }
//     }
//     return false
// };

var validPalindrome = function(s) {
   

    let left = 0;
    let right = s.length - 1;

    while(left < right){
       
        if(s[left] === s[right]){
            left++;
            right--;
        }else{
            return isPalindrome(s, left+1, right) || isPalindrome(s, left, right+1);
        }
    }

 return true;
   
};

function isPalindrome(s, left, right){
    while(left < right){
        if(s[left] !== s[right]){
            return false;
        }

        left++;
        right--;
    }
    return true;
}


console.log(validPalindrome('cbbd'));
// console.log(validPalindrome('kpmmmpzvenihizrwiayccqgaufyvtovmrwkoyeuiahlttaakxyoaaykpefxztwejuhzlnwzungjchoouzezkdwdyogldpbuxgjzntykajssipdohuboipzojcyviptdvdptqtzpvpspnyajqicnkwraiueguouvwcyjrfsjyeqbwhqgjjgeupjmnyvhzopnxpqwcrtwbkpjrrxdijxnvivzixruohixeekatyxsggbqdulglefrtchsonvrkfijupjoxhinekbmpqogedmwnbcirlkooxmentkkgqtlnjlvnqugxpkrxceokjqkgwckjwcbedkfnahmbzmvxhruczbpaanvembrgcuskejtncqttespmkxjlppmjdyelvsuoqwiqwqeyqpfkgrnpnureneqqbnfqbkclilinrlwfxjknfjeozoqjnhrymkkaluquqqigdrkchhtewiesnierwmrlualbpbjfbedctxgidksvuhkltfrikhxrmimprhqmrefkirflnbbnpgzpuqyvqbewvtwgzsjwpsgcvpqllavcyhfshenwscsupdyjhwijewnqrdscqzumdyoqucsnbjucieskiaayheawwwpcsqllwyfqnuczdgbcmcxrxdgjnyxiifecbquwxtfucfndnsphzgyisrdfnpmwasyrtrgugqauowwswqdevynxlpvcfrkgoqdusvrltxyarsewkwxjtlhauwiiodxuueuxajwhuqwwezqvmgganwreyuvuodjetwczepqdtigxblyvuzmiklstszkjneyrnykuayrejejszgjcgrcozgvzdqvgpvedmdwracwbpscgndpgubvhvqybggudrgspxjgydmejzmdzksgomjlkicaxtmtzlkjqyzevvjlzpolbsttpwnzidlpcvhwrfdkfokneommrlbhxqfrmiozqympnrwbdamwtpekichovprrtcnlcjmlfcvyprvkgashnbgflhddhlfgbnhsagkvrpyvcflmjclnctrrpvohcikeptwmadbwrnpmyqzoimrfqxhblrmmoenkofkdfrwhvcpldiznwpttsblopzljvvezyqjklztmtacikljmogskzdmzjemdygjxpsgrduggbyqvhvbugpdngcspbwcarwdmdevpgvqdzvgzocrgcjgzjejeryaukynryenjkzstslkimzuvylbxgitdqpezcwtejdouvuyerwnaggmvqzewwquhwjaxueuuxdoiiwuahltjxwkwesrayxtlrvsudqogkrfcvplxnyvedqwswwouaqgugrtrysawmpnfdrsiygzhpsndnfcuftxwuqbcefiixynjgdxrxcmcbgdzcunqfywllqscpwwwaehyaaikseicujbnscuqoydmuzqcsdrqnwejiwhjydpuscswnehsfhycvallqpvcgspwjszgwtvwebqvyqupzgpnbbnlfrikfermqhrpmimrxhkirftlkhuvskdigxtcdebfjbpblaulrmwreinseiwethhckrdgiqququlakkmyrhnjqozoejfnkjxfwlrnililckbqfnbqqenerunpnrgkfpqyeqwqiwqousvleydjmppljxkmpsettqcntjeksucgrbmevnaapbzcurhxvmzbmhanfkdebcwjkcwgkqjkoecxrkpxguqnvljnltqgkktnemxooklricbnwmdegoqpmbkenihxojpujifkrvnoshctrfelgludqbggsxytakeexihourxizvivnxjidxrrjpkbwtrcwqpxnpozhvynmjpuegjjgqhwbqeyjsfrjycwvuougeuiarwknciqjaynpspvpztqtpdvdtpivycjozpiobuhodpissjakytnzjgxubpdlgoydwdkzezuoohcjgnuzwnlzhujewtzxfepkyaaoyxkaattlhaiueyokwrmvotvyfuagqccyaiwrzihinevzpmmmpk'));