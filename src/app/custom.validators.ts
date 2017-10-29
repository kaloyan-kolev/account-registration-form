import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ServerService } from './server.service'; 

export class Customvalidators{
    static checkDuplicateEmail(serverService: ServerService) {
        return (control: AbstractControl) => {
          return serverService.checkUsers(control.value).map(res => {
            return res ? null : { duplicateEmail: true };
          });
        };
    }
}
