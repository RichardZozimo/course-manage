import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'replace' // nome utilizado na chamada do pipe
})
export class ReplacePipe implements PipeTransform {

  transform(value: string, char: string, valueToReplace: string) {
    return value.replace(char, valueToReplace);
  }

}
