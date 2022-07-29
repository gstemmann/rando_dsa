/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    //string may only contain '({[]})'
    
    //return true if open brackets are closed by same type of bracket
    //open brackets must be closed in correct order so '([)]' is invalid?
    //otherwise invalid so false
    
    
    //how do i check for a closing after a opening bracket?
    
    //how to check for if closing bracket comes not immediately after
    
    //  input: "([{}])"
    
    // input : ")("
    // doesn't handle "out of order" matches
    
    string = ''

    for(let i = 0; i < s.length; i++) {
        
        if(s[i] === "(") {
            if(s[i + 1] !== ")") return false;
        }
        
        if(s[i] === "[") {
            if(s[i + 1] !== "]") return false;
        }
        
        if(s[i] === "{" &&  !s.includes("}")) {
            return false;
        }
    }
    
    return true;

    
    
};




/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    //string may only contain '({[]})'
    
    //return true if open brackets are closed by same type of bracket
    //open brackets must be closed in correct order so '([)]' is invalid?
    //otherwise invalid so false
    
    
    //how do i check for a closing after a opening bracket?
    
    //how to check for if closing bracket comes not immediately after
    
    //  input: "([{}])"
    
    // input : ")("
    // doesn't handle "out of order" matches
    
    string = ''

    let newObj = {
        '(':')',
        '[':']',
        '{':'}'
    }
    let newArr = []
    
    for (let key of s) {
        if(newObj[key]) {
            newArr.push(newObj[key])
        } else {
            if(newArr.pop() !== key)
              return false  
        }
    }
return (!newArr.length)

    
    
};

