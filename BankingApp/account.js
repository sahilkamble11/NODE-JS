
var handler=require("./handler"); //custom mudule
var events=require("events"); //inbuilt module

var Account=function(amount){
    var balance=amount;


    var emitter=new events.EventEmitter();
    //Inner function
    var getBalance=function(){
        return balance;
    };

    var monitor=function(){
        if(balance<500){
            emitter.emit("underBalance");
           // handler.blockAccont();
            //console.log("Insufficient Funds!!")
        }
        else if(balance>250000){
            emitter.emit("overBalance")
           // handler.payIncomeTax();
            //console.log("Over the Limit, Tax can be Applied")
        }
        else{
            console.log("Transaction complete!!")
        }
    }

    var withdraw=function(amount){
        balance=balance-amount;
        monitor();
        
    };
    var deposit=function(amount){
        balance=balance+amount;
        monitor();
    }
    return{
        showBalance:getBalance,
        debit:withdraw,
        credit:deposit,
        emitter: emitter 
    }

   }
    var acct123=new Account(45000);

    acct123.emitter.on("underBalance",handler.blockAccount);
    acct123.emitter.on("overBalance",handler.payIncomeTax);
    var data=acct123.showBalance();
    console.log("Balance= "+ data);

    var amount=500000;
    acct123.credit(amount);
    var data=acct123.showBalance();
    console.log("Balance= "+ data);

    var amount=20000;
    acct123.debit(amount);
    var data=acct123.showBalance();
    console.log("Balance= "+ data);

