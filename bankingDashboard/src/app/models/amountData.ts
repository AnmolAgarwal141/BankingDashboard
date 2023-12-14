export class amountData{
    img:string
    title:string
    totalAmount:number
    targetAmount:number
    targetAchieved:number  
    balanceComp:boolean

    constructor(img:string,title:string,totalAmount:number,targetAmount:number,targetAchieved:number,balanceComp:boolean){
        this.img=img;
        this.title=title,
        this.totalAmount=totalAmount;
        this.targetAmount=targetAmount;
        this.targetAchieved=targetAchieved;
        this.balanceComp=balanceComp

    }
}