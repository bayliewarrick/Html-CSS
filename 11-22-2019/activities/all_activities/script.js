/* 
Check if word is a palindrome
letters_reversed = []
word_letters = []
word = 'mom'
function is_palindrome() {
  for(let letter = 0; letter < word.length; letter++) {
    word_letters.push(word[letter])
    letters_reversed.unshift(word[letter])
    }      
    }



is_palindrome()
//word_letters = word_letters.join('');
//letters_reversed = letters_reversed.join('');
console.log(word_letters)
console.log(letters_reversed)
if(word_letters == letters_reversed) {
      console.log(word + ' IS a palindrome!');
} else {
      console.log(word+ ' IS NOT a palindrome!');
}
*/

/* Finds a given value within an array.
array = ["Hello","Goodbye","Good Day"]
value = "Hello"
result = array.includes(value)
console.log(result)
*/

/* finds and returns min and max numbers in an array
this_arr = [3,1,6,16,26,49,27,96,18]
this_arr_max = Math.max.apply(null,this_arr)
this_arr_min = Math.min.apply(null,this_arr)
console.log(this_arr_max)
console.log(this_arr_min)
*/

/* A Fizz-Buzz Application!
function fizzbuzz(number) {
  if((number % 5 == 0) && (number % 3 == 0)) {
    console.log('fizzBuzz!')
  } else if(number % 5 == 0) {
    console.log('buzz')
  } else if(number % 3 == 0) {
    console.log('fizz') 
  } else {
    console.log('not fizz, not buzz. Sorry')
  }
}
fizzbuzz(15)
fizzbuzz(5)
fizzbuzz(3)
fizzbuzz(17)
*/

/* Removes duplicate values from an array!
varlist = [1,1,2,4,6,7,7,11,12,15]
no_dupes = []

function check_dup() {
  for (let i = 0; i < varlist.length; i++) {
    console.log(no_dupes)
    if(no_dupes.includes(varlist[i])) {
      console.log('duplicate removed:'+varlist[i])
    }else {
      no_dupes.push(varlist[i])
    }
    }
  }
check_dup()
*/

/*Sorts an array by Descending order
arr = [13,4,255,95,39,401,22]
arrSorted = []
arr.sort( function(a, b) {return a-b} ); 
*/

/*Finds the number of words 
var sentence = "My Dog Just Got Finished Being Walked!"
sentence = sentence.split(' ').length
console.log(sentence + ' words in the inputted sentence!')
*/

/*returns the number of vowels in a given word.
vowels = ['a','e','i','o','u']
var word = 'hello'
numOfVowels = 0;
for(let i = 0; i < word.length; i++) {
  if(vowels.includes(word[i]))
  numOfVowels++;
}
console.log(numOfVowels + ' vowels in the word: '+word)
*/