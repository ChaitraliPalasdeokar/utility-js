const tail = require("./tail");

describe('Head', () => {

     it('tail of [1,2,3] is [2,3]', () => {
        expect(tail([1,2,3])).toEqual([2,3]);
    });

    it('tail of [] is []', () => {
        expect(tail([])).toEqual([]);
    });

})
