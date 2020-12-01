var nextLine = "____________________"

// .cocat() method using functions

function myConcat(str1,str2) {
     return str1.concat(str2)
      
}
console.log(myConcat("Concat is ", "Awsome"))  //combinding words to make a sentence
console.log(nextLine)
function myConcat(arr1,arr2) {
    return arr1.concat(arr2)
     
}
console.log(myConcat([1, 2, 3, 4], [5, 6, 7, 8, 9]))  //combinding an arry
console.log(nextLine)
function myConcat(ob1,obj2) {
    return ob1.concat(obj2)
     
}
console.log(myConcat(`${"out"}`,  `${"side"}`))  //combinding two words to make a compound word
console.log(nextLine)
//_______________________________

// indexOf method using functions /* checkout findIndex and find()*/

function myIndex(myName) {  
    return myName.indexOf(["R"])
}
console.log(myIndex("Carlos Robinson")) //does a particular letter occur in a string
console.log(nextLine)

function myIndex2(myName2) {
    return myName2.indexOf(["P"])
}
console.log(myIndex2("Carlos Robinson"))  // when you get a character that is not in the string it Returns -1 if the item is not found
console.log(nextLine)

function myIndex3(myName3) {
    return myName3.indexOf("i", 2)
}
console.log(myIndex3("Carlos Robinson"))//Find the first occurrence of a letter  in a string, starting the search at position x:
console.log(nextLine)

// .lastIndexOf() methodusing functions

