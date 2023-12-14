import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'transactionFilter'
})
export class transactionFilterPipe implements PipeTransform{
    transform(valueArr: any,term:string,excludes:any=[]):any {
        if(!term|| !valueArr) return valueArr;
        return transactionFilterPipe.filter(valueArr,term,excludes);
    }

    static filter(valueArr:Array<any>,term:string,excludes:any):Array<any>{
        const compareString=term.toLowerCase();
        function checkInside(value:any,term:string){
            if(typeof value==='string' && value.toString().toLowerCase().includes(compareString)){
                return true
            }
            for(let item in value){
                if(value[item]===null||value[item]==undefined||excludes.includes(item)){
                    continue;
                }
                if(typeof value[item]==='object'){
                    if(checkInside(value[item],term)){
                        return true;
                    }
                }
                else if(value[item].toString().toLowerCase().includes(compareString)){
                    return true;
                }
            }
            return false;
        }
        return valueArr.filter(function(value){return checkInside(value,term)})
    }
}