import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'complete'
})
export class CompletePipe implements PipeTransform {

  transform(pipeData, pipeModifier) {
    if(!pipeData)
      return pipeData;
    return pipeData.filter((eachItem)=>{
      
      return eachItem['completed'].toLowerCase().includes(pipeModifier.toLowerCase())
    });
  }

}
