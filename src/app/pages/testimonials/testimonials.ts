import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class Testimonials  {

  testimonials = [
    {
      name: 'Chandrarekha M',
      message: 'A wonderful experience! Everything was easy to use, and I felt supported at every step.',
      role: '8 LPA',
      image: 'assets/images/rekhapic.jpg'
    },
    {
      name: 'Deepa',
      message: 'The learning experience was excellent! The concepts were explained clearly, and I feel more confident now.',
      role: '12 LPA',
      image: 'assets/images/student1.jpg'
    },
    {
      name: 'Sneha C S',
      message: 'Thanks to the guidance and support I received here, I was able to land my dream job.',
      role: '15 LPA',
      image: 'assets/images/student2.jpg'
    }
  ];

  get latestTestimonial() {
    return this.testimonials.length
      ? this.testimonials[this.testimonials.length - 1]
      : null;
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.testimonials.push(form.value);
      form.reset();
    }
  }
}
