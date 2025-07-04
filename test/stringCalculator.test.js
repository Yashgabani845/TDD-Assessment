const  { Add , GetCalledCount } =  require('../src/stringCalculator');

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

     test('Support different delimiters',()=>{
        expect(Add("//;\n1;2")).toBe(3);
        expect(Add("//;\n1;2\n3;4")).toBe(10);
     })

     test('Negative Not allowed',()=>{
      expect(() => Add("-1,2")).toThrow("Negatives not allowed : -1");
      expect(() => Add("3,-2")).toThrow("Negatives not allowed : -2");
     })

     test('Multiple Negative Value Not allowed',()=>{
      expect(() => Add("-1,-2,3")).toThrow("Negatives not allowed : -1,-2");
      expect(() => Add("-1,-2,-3")).toThrow("Negatives not allowed : -1,-2,-3");
     })


});

describe('GetCalledCount', () => {
   test.only("should return number of times Add() is called", () => {
    expect(GetCalledCount()).toBe(0);
    Add("1,2");
    Add("3");
    expect(GetCalledCount()).toBe(2);
   })
});

