function Add ( str ){
    if(str === ""){
        return 0;
    }
    const numbers = str.split(",").map(s => Number(s.trim()));
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue , 0 );
    
}

module.exports= { Add };