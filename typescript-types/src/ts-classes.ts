/**
 * @fileoverview Class and interface
 */

abstract class Department {
  private id: string;
  private name: string;
  private employeeNames: string[] = [];
  protected employees: string[] = [];

  static fiscalYear = 2020;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    console.log(Department.fiscalYear);
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
    console.log('Id: ' + this.id);
  }

  addEmployee(employeeName: string) {
    this.employeeNames.push(employeeName);
  }

  printEmployeeInformation() {
    console.log(this.employeeNames);
  }

  static createEmployee(empName: string) {
    return { empName: empName };
  }

  abstract describeYourDepartment(this: Department): void;
}

// const dep = new Department('1', 'Accounting');
// dep.describe();
// dep.addEmployee('Person');
// dep.printEmployeeInformation();

// console.log(dep);

// const accountingCopy = { name: 'Another', describe: dep.describe };
// print 'Another'
// accountingCopy.describe();

class DepartmentInitialization {
  constructor(private readonly id: string, public name: string) { }

  describe(this: DepartmentInitialization) {
    console.log(`Department: ${this.name} and Id: ${this.id}`);
  }
}


class ITDepartment extends Department {
  private admins: string[] = [];
  constructor(id: string, admins: string[]) {
    super(id, 'IT Department');
    // must be after super
    this.admins.push(...admins);
  }

  describeYourDepartment() {
    console.log(`Accounting Department Id: ${this.admins}`);
  }
}

const ITdep = new ITDepartment('1', ['Walker', 'Talker']);
ITdep.describe();
ITdep.addEmployee('Person');
ITdep.addEmployee('Worker');
ITdep.printEmployeeInformation();

console.log(ITdep);

class AccountingDepartment extends Department {

  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  set mostRecentReport(report: string) {
    if (report) {
      throw new Error('Invalid report');
    }
    this.addReport(report);
  }

  // Private constructor for singleton
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting Department');
    this.lastReport = this.reports[0];
  }

  // Only one instane
  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('1', []);
    return this.instance;
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  printReport() {
    console.log(this.reports);
  }

  addEmployee(emp: string) {
    if (emp === 'Worker') {
      return;
    }
    this.employees.push(emp);
  }

  // Override
  describe() {
    console.log(`Accounting Department Id: ${this.lastReport}`);
  }

  describeYourDepartment() {
    console.log(`Accounting Department Id: ${this.lastReport}`);
  }
}

// const acctn = new AccountingDepartment('1', []);
const acctn = AccountingDepartment.getInstance();
acctn.addReport('Reporting for reading...');
acctn.printReport();
acctn.addEmployee('Person');
acctn.addEmployee('Worker');

acctn.mostRecentReport = "recent report...";

console.log(acctn);
console.log(acctn.mostRecentReport);


const employee1 = Department.createEmployee('Runner');
console.log(employee1, Department.fiscalYear);
