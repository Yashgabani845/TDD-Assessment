const  { Add } =  require('../src/stringCalculator');

describe("Addition", () => {
    test('should return 0 on empty string', () => { 
        expect(Add("")).toBe(0);
     })
    
});
