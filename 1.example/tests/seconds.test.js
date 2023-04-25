import {sumSeconds} from '../src/app.js';

describe('function sumSeconds for small numbers', function () {
  it('should return correct values (test seconds-1)', function(){
    expect(sumSeconds([1])).toEqual('1s');
  });
  it('should return correct values (test seconds-2)', function(){
    expect(sumSeconds([11, 12, 13])).toEqual('36s');
  });
  it('should return correct values (test seconds-3)', function(){
    expect(sumSeconds([5, 15, 25])).toEqual('45s');
  });
});
