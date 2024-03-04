import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce'
  //pure: true =>pure function will be memoised
  //pure: false =>not pure function will re-render
})
export class ReducePipe<T> implements PipeTransform {

  transform(array: T[], reduceFn:(acc: any, curr: T)=>any, initialValue: T): unknown {
    return array.reduce(reduceFn);
  }

}
