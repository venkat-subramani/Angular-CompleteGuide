import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  statuses = ['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.forbiddenProjectName]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Stable')
    });
  }

  onSubmit() {
    console.log(this.projectForm);
    // this.projectForm.reset();
  }

  forbiddenProjectName(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return { 'nameIsForbidden': true};
    } else {
      return null;
    }
  }

}
