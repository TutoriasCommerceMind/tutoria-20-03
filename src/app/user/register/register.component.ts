import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  form: any;
  checkbox: boolean = false;
  constructor(private fb: FormBuilder, private service: UserService) {
    this.form = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      phone: ['', [Validators.minLength(3), Validators.maxLength(50)]],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      checkbox: [false],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log('invalid form');
      return;
    }

    console.log(this.form.value);
    const user = {
      username: this.form.value.username,
      name: this.form.value.name,
      password: this.form.value.password,
      phone: this.form.value.phone,
    };

    this.service.addUser(user).subscribe((data) => {
      console.log(data);
    });
  }
}
