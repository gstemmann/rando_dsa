/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
        s=s.toLowerCase();
    
        function verifyChar(char) {
            const isNumber = char < '0' || char > '9';
            const isLetter = char < 'a' || char > 'z';
            return isNumber && isLetter;
        }

        let left = 0;
        let right = s.length - 1;
        
        while (left < right) {
            while (verifyChar(s[left]))
                left++;
            while (verifyChar(s[right]))
                right--;
            if (s[left] !== s[right])
                return false;
            left++;
            right--;
        }
        return true;
};