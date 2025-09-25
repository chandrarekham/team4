import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Course1 } from '../../course1';


@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})



export class Home implements OnInit {

  email = '';
  message = '';
  messageType: 'success' | 'error' | '' = '';

  courses: any[] = [];
  Testimonials: any[] = [];

  constructor(private router: Router, private course1: Course1) {}

  ngOnInit(): void {
    this.loadCourses();
    this.loadTestimonials();
  }

  loadCourses() {
    this.course1.getCourses().subscribe({
      next: (data: any[]) => {
        this.courses = data;
      },
      error: (err: any) => {
        console.error('Error fetching courses:', err);
      }
    });
  }

  loadTestimonials() {
    this.course1.getTestimonials().subscribe({
      next: (data: any[]) => {
        this.Testimonials = data;
      },
      error: (err: any) => {
        console.error('Error fetching testimonials:', err);
      }
    });
  }

  goToCourses() {
    this.router.navigate(['/courses']);
  }

  subscribe() {
    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (this.email.match(emailRegex)) {
      this.message = "Thank you for subscribing!";
      this.messageType = 'success';
      this.email = '';
    } else {
      this.message = "Please enter a valid email.";
      this.messageType = 'error';
    }
  }
}

//   courses = [
//     { title: "Web Development", duration: "3 Months", image: "assets/images/course1.png", description: "Build modern websites using HTML, CSS & JS." },
//     { title: "AI", duration: "6 Months", image: "assets/images/course2.png", description: "Master artificial intelligence and machine learning." },
//     { title: "Data Science", duration: "6 Months", image: "assets/images/course3.png", description: "Analyze data and derive valuable insights." },
//     { title: "Digital Marketing", duration: "2 Months", image: "assets/images/course4.jpg", description: "Learn marketing strategies for the digital world." }
//   ];

//   testimonials = [
//     { name: "Sneha C S", feedback: "This institute helped me build strong skills!" },
//     { name: "Chandrarekha", feedback: "Great learning experience!" },
//     { name: "Deepa", feedback: "Very practical and helpful." },
//     { name: "Lakshana", feedback: "Great learning platform!" }
//   ];

//   constructor(private router: Router) {}

//   goToCourses() {
//     this.router.navigate(['/courses']);
//   }

//   subscribe() {
//     const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//     if (this.email.match(emailRegex)) {
//       this.message = "Thank you for subscribing!";
//       this.email = '';
//     } else {
//       this.message = "Please enter a valid email.";
//     }
//   }
// }
