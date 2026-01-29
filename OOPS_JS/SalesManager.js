import SalesEmployee from "./SalesEmployee.js";

class SalesManager extends SalesEmployee{

    constructor(id,name,basicSalary,hra,tax,commission,bonus){
        //Constructor chaining
        super(id,name,basicSalary,hra,tax,commission);
        this.bonus=bonus;
    }

    computePay(){
        return super.computePay()+this.bonus;
    }

    doWrok(){
        console.log("SalesManager is doing his Work.")
    }

    conductTraining(){
        console.log("Conduct Trainning for salse manager");
    }

    conductSession(){
        console.log("Conduct session for salse manager")
    }
}

export default SalesManager;