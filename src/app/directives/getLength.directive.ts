import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getLength',
})
export class GetLengthPipe implements PipeTransform {
  transform(val?: any[] | null) {
    return val?.length || 0;
  }
}
