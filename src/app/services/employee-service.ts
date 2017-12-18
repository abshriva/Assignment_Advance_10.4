import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';


/**
 * 
 * 
 * @export
 * @class EmployeeService
 */
@Injectable()
export class EmployeeService{

    emp:Employee[] =[];
   

      getEmployees(): Employee[]
      { 
      return this.emp;
      }
        
      createEmployee(newEmp: Employee)
      {
      this.emp.unshift(newEmp);
      
      }
        
}