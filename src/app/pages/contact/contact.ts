import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {


 onSubmit(form: any) {
  if (form.valid) {
    console.log("Form submitted");
    alert("✅ Message sent successfully!");
    form.reset();
  }
}
}
 

   