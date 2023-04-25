import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parse',
})
export class ParsePipe implements PipeTransform {
  transform(val: string) {
    return JSON.parse(val);
  }
}
