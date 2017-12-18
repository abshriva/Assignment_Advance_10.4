
import { Employee } from '../models/Employee';
import { Component, OnInit,Inject } from '@angular/core';
import { EmployeeService } from '../services/employee-service';
import { EmployeeDropDownService } from '../services/employee-drop-dow.service';
import { EmployeeType } from '../models/Employee-type';
import { 
  FormGroup, FormControl , Validators,FormBuilder
} from '@angular/forms';
import { AppValidators } from '../app.validator';


/**
 * 
 * 
 * @export
 * @class EmployeeFormComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
 
})


export class EmployeeFormComponent implements OnInit {
  
  
  form: FormGroup
  employee:Employee = new Employee();
  employeeType: EmployeeType[] = [];

  /**
   * Creates an instance of EmployeeFormComponent.
   * @param {EmployeeService} employeeService 
   * @param {EmployeeDropDownService} empDropDownService 
   * @param {FormBuilder} fb 
   * @memberof EmployeeFormComponent
   */
  constructor(private employeeService: EmployeeService,
    private empDropDownService: EmployeeDropDownService,
    private fb: FormBuilder) 
  { 
    
  }

  ngOnInit() {

    this.createFormWithFormBuilder();

    this.employee={
      id:null,
      name:'',
      age:null,
      title:''
    }
    this.employeeType = this.empDropDownService.getEmployeeType();
  }

  
  // Create form using FormBuilder
  private createFormWithFormBuilder() {
    this.form = this.fb.group({
      id: ['', [Validators.required,AppValidators.cannotMoreThenThree]],
      name:['', [Validators.required,
        Validators.pattern('^[a-zA-Z]*$')]],
      age: ['', Validators.required],
      employeeType: ['', Validators.required]  
    });
  }

/**
 * 
 * 
 * @param {any} values 
 * @memberof EmployeeFormComponent
 */
onSave(values)
  {
    this.employee={
      id:values.id,
      name:values.name,
      age:values.age,
      title:values.employeeType
    };
    
    
    this.employeeService.createEmployee(this.employee);
    
    this.employee = new Employee();

  }

  
     /**Reset a form */
    //  resetForm(f) {
    //   f.reset();
    // };

}
