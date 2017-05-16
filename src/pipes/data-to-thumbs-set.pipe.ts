import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dataToThumbsSet'
})
export class DataToThumbsSetPipe implements PipeTransform {

    transform(values: any[], args?: any): any {
        const set = [];
        const totalIterations = Number((values.length / 4).toFixed());
        for (let i = 0; i < totalIterations; i++) {
            set.push(values.slice(i * 4, (i + 1) * 4));
        }
        return set;
    }

}
