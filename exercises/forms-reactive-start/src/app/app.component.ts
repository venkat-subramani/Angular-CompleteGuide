import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { resolve } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    /* this.signUpForm.valueChanges
      .subscribe(
        (value) => {
          console.log(value);
        }
      ); */
    this.signUpForm.statusChanges
      .subscribe(
        (status) => {
          console.log(status);
        }
      );
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  onSubmit() {
    console.log(this.signUpForm);
    this.signUpForm.reset();
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true};
    } else {
      return null;
    }
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    // tslint:disable-next-line:no-shadowed-variable
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
