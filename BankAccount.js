// Create a constructor function called BankAccount that takes accountNumber, name, type, and balance as arguments.
// Inside the constructor, initialize the properties of the bank account object.

function BankAccount(ac,n,t,b){
    this.accountNumber=ac;
    this.name=n;
    this.type=t;
    this.balance=b
}
BankAccount.prototype.deposite=function(value){
    this.balance=this.balance + value
}
BankAccount.prototype.withdraw=function(value){
    if(this.balance<value){
        console.log("insufficient")
    }else{
        this.balance-=value
    }
}
BankAccount.prototype.isActive=function(){
    if(this.balance==0){
        console.log("insuffisiant")
    }else{
        console.log("Active")
    }
}
BankAccount.prototype.ChekBalance=function(value){
    console.log(this.balance)
}
const p1=new BankAccount(1,"anklesh","saving",1000)
// console.log(person1)
p1.deposite(1000)
console.log(p1)