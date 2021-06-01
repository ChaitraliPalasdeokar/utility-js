const reduce = require('./reduce');
const add = require('./add');

describe('Reduce', () => {

    it('reduce([],(x,y)=>x+y)` should be undefined', () => {
        expect(reduce([], add)).toEqual(undefined);
    });

    it('reduce([],(1,2)=>x+y)` should be 3', () => {
        expect(reduce([1,2], add )).toEqual(3);
    });


 })
