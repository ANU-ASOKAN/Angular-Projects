import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-submit-form',
  standalone: false,
  templateUrl: './submit-form.component.html',
  styleUrl: './submit-form.component.css'
})
export class SubmitFormComponent {
 user ={firstName:'',email:'',phoneNumber:''}
 
  constructor(private router:Router){

  }
  onSubmit(form:any){
    if(form.valid){
      console.log('Form submitted successfully',this.user);
      this.router.navigate(['users'])
    }else{
      console.log('Error in submitting form',this.user);
    }
  }
}
