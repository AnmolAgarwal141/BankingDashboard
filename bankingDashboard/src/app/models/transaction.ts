export class transaction{
    date:string
    name:string
    status:string
    type:string
    uTime:string 
    uTrasactionAmount:string

    constructor(date:string,name:string,status:string,type:string,time:string,transactionAmount:string){
        this.date=date;
        this.name=name;
        this.status=status;
        this.type=type;
        this.uTime=time;
        this.uTrasactionAmount=transactionAmount

    }
}