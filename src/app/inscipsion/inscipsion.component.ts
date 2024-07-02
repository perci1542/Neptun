import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators, FormBuilder} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { error } from 'console';
import { response } from 'express';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-inscipsion',
  templateUrl: './inscipsion.component.html',
  styleUrl: './inscipsion.component.scss'
})
export class InscipsionComponent {
    inscipsionForm!: FormGroup;
    hidePassword:boolean = true;
    visibility_of:boolean = true;

    constructor(private fb:FormBuilder,
      private snackBar: MatSnackBar,
      private authService: AuthService,
      private router:Router
    ){
         
    }
    

    viewpass(){
      this.hidePassword = !this.hidePassword
      this.visibility_of = !this.visibility_of
    }

    ngOption():void{
       this.inscipsionForm = this.fb.group({
        name:[null,[Validators.required]],
        email:[null,[Validators.required, Validators.email]],
        password:[null,[Validators.required]],
        confirmPassword:[null,[Validators.required]]   
       })
    }

    onSubmit():void{
      const password = this.inscipsionForm.get('password')?.value;
      const confirmPassword = this.inscipsionForm.get('confirmPassword')?.value;

      if(password !== confirmPassword ){
        this.snackBar.open('la contraseña no coincide','close',{duration: 5000,panelClass:'error-snackBar'});
        return;
      }

      this.authService.register(this.inscipsionForm.value).subscribe(
        (response)=>{
          this.snackBar.open('inscripcion exitosa','close',{duration:5000});
          this.router.navigateByUrl("/acceso");
        },
        (error)=>{
          this.snackBar.open('inscripcion fallida, por favor intentar de nuevo','close',{duration:5000, panelClass:'error-snackBar'});
        }
      ) 
    }

    /*name = new FormControl('',Validators.required);
    email = new FormControl('',Validators.required);*/
}
