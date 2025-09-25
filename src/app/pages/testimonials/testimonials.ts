import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Course1 } from '../../course1';
export interface Testimonial {
  id?: string;
  name: string;
  role?: string;
  image?: string;
  message: string;
}
@Component({
  selector: 'app-testimonials',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})


export class Testimonials implements OnInit {
  testimonials: Testimonial[] = [];
 
  constructor(private course1: Course1) {}
 
  ngOnInit() {
    this.fetchTestimonials();
  }
 
  fetchTestimonials() {
    this.course1.getTestimonials().subscribe({
      next: (data) => this.testimonials = data,
      error: (err) => console.error('Error fetching testimonials:', err)
    });
  }
 
  onSubmit(form: NgForm) {
    if (form.valid) {
      const newTestimonial: Testimonial = form.value;
      this.course1.addTestimonial(newTestimonial).subscribe({
        next: (saved) => {
          this.testimonials.push(saved);
          form.reset();
        },
        error: (err) => console.error('Error adding testimonial:', err)
      });
    }
  }
}









  // Testimonials: any[] = [];

  // constructor(private router: Router, private course1: Course1) {}

  // ngOnInit(): void {
  //   this.loadTestimonials();
  // }



  // loadTestimonials() {
  //   this.course1.getTestimonials().subscribe({
  //     next: (data: any[]) => {
  //       this.Testimonials = data;
  //     },
  //     error: (err: any) => {
  //       console.error('Error fetching testimonials:', err);
  //     }
  //   });

  

  

  // ngOnInit() {
  //   this.fetchTestimonials();
  // }

  // fetchTestimonials() {
  //   this.course1.getTestimonials().subscribe({
  //     next: (data) => {
  //       this.testimonials = data;
  //     },
  //     error: (err) => {
  //       console.error('Error fetching testimonials:', err);
  //     }
  //   });
//   }

//   onSubmit(form: any) {
//     if (form.valid) {
//       const newTestimonial: Testimonials = form.value;

//       this.course1. addTestimonial(newTestimonial).subscribe({
//         next: (saved: Testimonials) => {
//           this.Testimonials.push(saved);  // Add the saved testimonial to local list
//           form.reset();
//         },
//         error: (err: any) => {
//           console.error('Error adding testimonial:', err);
//         }
//       });
//     }
//   }



// }