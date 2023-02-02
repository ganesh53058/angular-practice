import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: true, 
  /* This is optional. 
  Pipe is by default a pure pipe. 
  By specifying pure: false, a pipe will become impure pipe.*/
})
export class FilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
