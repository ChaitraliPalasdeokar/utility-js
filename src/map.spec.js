const map = require('./map');
const cube = require('./cube');
const identity = require('./identity');
describe('Map',()=>{
     
     it('map([], cube)` should give `[]',()=>{
          expect(map([1],cube)).toEqual([1]);
     });
     
     it('map([1,2,3], identity)` should give `[1,2,3]`',()=>{
     expect(map([1,2,3], identity)).toEqual([1,2,3]);
     })
     
     it('`map([1,2,3], cube)` should give `[1,8,27]`',()=>{
     expect(map([1,2,3], cube)).toEqual([1,8,27]);
     })
     

})
     
