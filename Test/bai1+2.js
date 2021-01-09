// Bai 1:
function findOppositeNumber (n, number) {
    let returnNumber = number > n/2 ? number - n/2 : number + n/2 ;
    console.log (returnNumber);
}
findOppositeNumber(10,9);

// Bai 2:
function merge2String(string1, string2){
    let array1 = string1.split("");
    let array2 = string2.split("");
    let returnString = [];
    if(array1.length === array2.length){
        array1.forEach((x,i) => {
            returnString.push(x);
            returnString.push(array2[i]);
        }); 
        }
    console.log(returnString.join(""));
    
    if(array1.length < array2.length){
        array1.forEach((x,i) => {
            returnString.push(x);
            returnString.push(array2[i]);
        });
        for(let i=array1.length; i< array2.length; i++){
            returnString.push(array2[i]);
        }
        console.log(returnString.join(""));
    }

    if(array1.length > array2.length){
        array1.forEach((x,i) => {
            returnString.push(x);
            returnString.push(array2[i]);
        });
        console.log(returnString.join(""));
    }    
}
merge2String("abc","123");
merge2String("abc","01234");
merge2String("abcd","123");


