class Solution:
    def isPalindrome(self, s: str) -> bool:
        
        # get a string thats all lowercase and then remove that way
        # regular expressions (sanitize the string)?
        
        # the 'ord' function convert a string into a number --- and take the number range
        # then convert to lowercase
        # then add it to a new string
        #
        
        new_string = ''
        
        for char in s:
            char = char.lower()
            if ord(char) >= 97 and ord(char) <= 122:
                new_string += char
                
        print(new_string)
        
        left = 0
        right = len(new_string) - 1
        
        while left < right:
            if new_string[left] != new_string[right]:
                return False
            else:
                left += 1
                right -= 1
                
        return True