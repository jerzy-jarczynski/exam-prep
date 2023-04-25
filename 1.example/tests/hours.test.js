import {sumSeconds} from '../src/app.js';

describe('function sumSeconds for large numbers', function () {
  it('should return correct values (test hours-1)', function(){
    expect(sumSeconds([1, 20, 40, 3600])).toEqual('1h1m1s');
  });
  it('should return correct values (test hours-2)', function(){
    expect(sumSeconds([11, 12, 13, 60, 300, 7200])).toEqual('2h6m36s');
  });
  it('should return correct values (test hours-3)', function(){
    expect(sumSeconds([5, 15, 25, 180, 240, 14400])).toEqual('4h7m45s');
  });
});
