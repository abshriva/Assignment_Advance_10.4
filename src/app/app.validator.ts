import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * 
 * 
 * @export
 * @class AppValidators
 */
export class AppValidators {
    // Custom validator
    static cannotMoreThenThree(control: AbstractControl): ValidationErrors | null {
        //console.log(control.value);
        if((control.value as number).valueOf() >999 || (control.value as number).valueOf() <99) {
           
            return {
                cannotMoreThenThree: true
            };
        }

        return null;
    }
}