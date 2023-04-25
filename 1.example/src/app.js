'use strict';

export function sumSeconds(input){
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }

  let output = (sum%60) + 's';

  if(sum >= 60) {
    output = Math.floor(sum/60)%60 + 'm' + output;
  }

  if(sum >= 60*60) {
    output = Math.floor(sum/60) + 'h' + output;
  }

  console.log('input', input, 'gives sum', sum, 'and output', output);

  return output;
}
