/*global $*/

// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
 $( document ).ready(function() {  $("button").click(function(){
    var message=$("input").val();        
    var latinizedmessege = sentenceToPigLatin(message);
    $("#message").text(latinizedmessege); 
  });
}); 


function latinizer(word){
    var vowels = ["a","e","i","o","u"];
    vowels.indexOf(word[0])>-1;
    if(word[0]==="a" || word[0]==="e" || word[0]==="i" || word[0]==="o" || word[0]==="u"){
        return word + "ay";  
    } else {
        var length = word.length;
        var firstLetter = word.slice(0, 1);
        var rest = word.slice(1, length);         
        var newTransformation = rest + firstLetter + "ay";
        return newTransformation;         
        word = word.substring(0, 1);
        word = word + firstLetter + "ay";
        }  
//} 




// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 


// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance

function sentenceToPigLatin(sentence){
    var pigLatin = sentence.split(' ');
    for (var i=0;i<pigLatin.length;i++){
        pigLatin[i] = latinizer(pigLatin[i]);
    }
    return pigLatin;
    
}

console.log(sentenceToPigLatin("Hello ScriptEd How You doing"));



