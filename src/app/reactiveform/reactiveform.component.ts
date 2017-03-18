import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  reactiveForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { 
    this.reactiveForm = fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', [Validators.required, Validators.minLength(6)]],
      'gender': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  submitForm() {
    this.router.navigate(['welcome'])
    console.log(this.reactiveForm, 'our form model');
  }

}
