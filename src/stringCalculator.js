function Add ( str ){
    if(str === ""){
        return 0;
    }
    let delimiters = [",", "\n"];
    
    if(str.startsWith("//")){
        let delimiter = str.substring(2,3);
        delimiters.push(delimiter);
        str = str.substring(4);
    }

    const regx = new RegExp(`[${delimiters.join("")}]`);
    const numbers = str
    .split(regx)
    .map(s => s.trim())
    .filter(s => s !== "")
    .map(Number);

    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue , 0 );
    
}

module.exports= { Add };