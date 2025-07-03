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

     test('should return sum of unknown number of numbers', ()=>{
        expect(Add("1,2,3,4,5")).toBe(15);
        expect(Add("10,20,30,40")).toBe(100);
     })

     test('should consider new line as an delimiter', ()=>{
        expect(Add("1\n2,3")).toBe(6);
        expect(Add("1\n2\n3")).toBe(6);
     })

});
