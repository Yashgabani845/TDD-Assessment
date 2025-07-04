const  { Add , GetCalledCount } =  require('../src/stringCalculator');


describe('GetCalledCount', () => {
   test("should return number of times Add() is called", () => {
    expect(GetCalledCount()).toBe(0);
    Add("1,2");
    Add("3");
    expect(GetCalledCount()).toBe(2);
   })
});

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

     test('Negative Not allowed',()=>{
      expect(() => Add("-1,2")).toThrow("Negatives not allowed : -1");
      expect(() => Add("3,-2")).toThrow("Negatives not allowed : -2");
     })

     test('Multiple Negative Value Not allowed',()=>{
      expect(() => Add("-1,-2,3")).toThrow("Negatives not allowed : -1,-2");
      expect(() => Add("-1,-2,-3")).toThrow("Negatives not allowed : -1,-2,-3");
     })

     test('Numbers bigger than 1000 should be ignored',()=>{
      expect(Add("1001,2")).toBe(2);
      expect(Add("1001,2,3")).toBe(5);
      expect(Add("1000,1")).toBe(1001);
      expect(Add("1001,2000,3")).toBe(3);
      expect(Add("1001,2001")).toBe(0); 
     })
});

describe('Delimiters', () => {
    
     test('should consider new line as an delimiter', ()=>{
        expect(Add("1\n2,3")).toBe(6);
        expect(Add("1\n2\n3")).toBe(6);
     })

     test('Support different delimiters',()=>{
        expect(Add("//;\n1;2")).toBe(3);
        expect(Add("//;\n1;2\n3;4")).toBe(10);
     })

     test('Support delimiters with bigger than one character',()=>{
         expect(Add("//[***]\n1***2***3")).toBe(6);
         expect(Add("//[abc]\n4abc5abc6")).toBe(15);
         expect(Add("//[##]\n2##1001##3")).toBe(5);
         expect(() => Add("//[!!]\n1!!-2!!3")).toThrow("Negatives not allowed : -2");
         
     })

     test('Support multiple delimiters',()=>{
        expect(Add("//[*][%]\n1*2%3")).toBe(6);
        expect(Add("//[*][%]\n1*2%3%4")).toBe(10);
     })

     test('handle multiple delimiters with length longer than one char',()=>{
        expect(Add("//[**][%%]\n1**2%%3")).toBe(6);
        expect(Add("//[**][%%]\n1**2%%3%%4")).toBe(10);
     });
   });