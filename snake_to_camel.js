function convertToCamel(word) {
    //1. create empty string
    //2. run loop through input string
    //3. if statement to find underscore
    //4. go to next index and add that index to empty string in uppercase
    //5. else statement to add current index to empty string
    //6. return new string

  let output = "";
    for (let i = 0; i < word.length; i++) {
        
        if (word[i] === "_") {
            output += word[i + 1].toUpperCase();
            i++;
        } else {
            output += word[i];
        }
    }
    return output;
}