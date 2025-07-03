function Add ( str ){
    if(str === ""){
        return 0;
    }

    //default delimiters
    let delimiters = [",", "\n"];
    
    //custom delimiters
    if(str.startsWith("//")){
        let delimiter = str.substring(2,3);
        delimiters.push(delimiter);
        str = str.substring(4);
    }
    //build regular expression with custom delimiters
    const regx = new RegExp(`[${delimiters.join("")}]`);
    const numbers = str
    .split(regx)
    .map(s => s.trim())
    .filter(s => s !== "")
    .map(Number);

    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue , 0 );
    
}

module.exports= { Add };