import Employee from "./Employee.js";

class SalesEmployee extends Employee{
    constructor(id,name,basicSalary,hra,tax,commission){
        //Constructor chaining
        super(id,name,basicSalary,hra,tax);
        this.commission=commission;
    }

    computePay(){
        return super.computePay()+this.commission; 
    }

    doWork(){
        console.log("SalesEmployee is doing his job.")
    }
    conductTraining(){
        console.log("Conduct Trainning for salse employee");
    }

    conductSession(){
        console.log("Conduct session for salse employee")
    }
}

export default SalesEmployee;