const  { Add } =  require('../src/stringCalculator');

describe("Addition", () => {
    test('should return 0 on empty string', () => { 
        expect(Add("")).toBe(0);
     })
    
     test('should return sum of numbers on numbers', ()=>{
        expect(Add("1,2")).toBe(3);
        expect(Add("1,2,3")).toBe(6);
        expect(Add("5")).toBe(5);
        expect(Add("1,")).toBe(1);
     })

});
