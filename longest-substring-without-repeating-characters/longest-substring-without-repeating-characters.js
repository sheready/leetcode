/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //checks if our string is empty or it's not returns 0
    if(!!!s.length || typeof s !== 'string') return 0;
    //if length is 1 return 1
    if(s.length==1) return 1;
    //create a hashTable to hold our characters and index;
    let hashTable = {};
    //length of longest substring
    let longestSubstringLength = 0;
    //start index
    let start = 0;
    //length of the array
    let length = s.length;
    
    //convert our strings to an array
    const strings = s.split('');
    //iterate over the array
    for(let i = 0;i<length;i++){
        //if the character exist and the value of the character is greater or equal to our start index
        if(hashTable[strings[i]] !==undefined && hashTable[strings[i]] >= start){
       //change the value of start to one higher than the value of our current character
            start = hashTable[strings[i]] +1
        }
        //add the current index and it's value to the hashTable
        hashTable[strings[i]] = i;
        //find the length of the longest substring by comparing the value with the value of the current //index minus the start value plus 1 
        longestSubstringLength = Math.max(longestSubstringLength, (i-start + 1))
    }
    //return the longestsubstringlength as the value
    return longestSubstringLength;
    
};