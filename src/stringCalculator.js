function Add ( str ){
    if(str === ""){
        return 0;
    }
    const numbers = str
    .replace(/\n/g, ",")
    .split(",")
    .map(s => s.trim())
    .filter(s => s !== "")
    .map(Number);

    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue , 0 );
    
}

module.exports= { Add };