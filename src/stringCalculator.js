let callCount = 0;

function Add ( str ) {
    callCount++;
    if(str === ""){
        return 0;
    }

    //default delimiters
    let delimiters = [",", "\n"];
    
    //custom delimiters
    if(str.startsWith("//[")){
      let endIndex = str.indexOf("]\n");
      let delimiter = str.substring(3, endIndex);
      delimiters = [",", "\n", delimiter];
      str = str.substring(endIndex + 2);
    }
    else if(str.startsWith("//")){
        let delimiter = str.substring(2,3);
        delimiters  = [",", "\n", delimiter];
        str = str.substring(4);
    }

    const regx = new RegExp(`[${delimiters.join("")}]`);
    const numbers = str
    .split(regx)
    .map(s => s.trim())
    .filter(s => s !== "")
    .map(Number)
    .filter(n => n <= 1000);

    //check for negative numbers
    const negatives = numbers.filter(n => n < 0);

    if (negatives.length > 0) {
        throw new Error("Negatives not allowed : " + negatives.join(","));
    }

    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue , 0 );
    
}

function GetCalledCount () {
    return callCount;
}

module.exports= { Add , GetCalledCount };