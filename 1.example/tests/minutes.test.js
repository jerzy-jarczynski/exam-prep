import {sumSeconds} from '../src/app.js';

describe('function sumSeconds for medium numbers', function () {
  it('should return correct values (test minutes-1)', function(){
    expect(sumSeconds([1, 20, 40])).toEqual('1m1s');
  });
  it('should return correct values (test minutes-2)', function(){
    expect(sumSeconds([11, 12, 13, 60, 300])).toEqual('6m36s');
  });
  it('should return correct values (test minutes-3)', function(){
    expect(sumSeconds([5, 15, 25, 180, 240])).toEqual('7m45s');
  });
});
