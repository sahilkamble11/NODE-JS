import Employee from "./Employee.js";
import SalesEmployee from "./SalesEmployee.js";
import SalesManager from "./SalesManager.js";
import IAppraisable from "./Interface/IAppraisable.js";
import ITrainer from "./Interface/ITrainer.js"


// var empref=typeof(Employee);
// console.log(`Type of class Employee: ${empref}`);

var emp=new Employee(1,"Sahil",50000,7000,3000);
console.log(emp.computePay());
console.log(emp);


// var salesempref=typeof(SalesEmployee);
// console.log(`Type of class Sales Employee: ${salesempref}`);

var salesemp=new SalesEmployee(1,"Saloni",50000,7000,3000,6000);
console.log(salesemp.computePay());
console.log(salesemp);



// var salesmanagerref=typeof(SalesManager);
// console.log(`Type of class Sales Employee: ${salesmanagerref}`);

var salesmanager=new SalesManager(1,"Ram",50000,7000,3000,6000,9000);
console.log(salesmanager.computePay());
console.log(salesmanager);

Object.assign(SalesManager.prototype,IAppraisable.prototype);
Object.assign(SalesManager.prototype,ITrainer.prototype);
Object.assign(SalesEmployee.prototype,IAppraisable.prototype);
Object.assign(SalesEmployee.prototype,ITrainer.prototype);

const staff=[
    new SalesManager(1,"Nirjala",50000,3000,5000,4000,6000),
    new SalesEmployee(2,"Saloni",40000,5000,6000,7000)
];

for(const trainer of staff){
    console.log(`Employee ID: ${trainer.id}, Name: ${trainer.name}, Pay: ${trainer.computePay()}`);
    trainer.conductTraining();
}