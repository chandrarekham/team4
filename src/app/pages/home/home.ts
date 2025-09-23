import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})


export class Home {
 
  email = '';
  message = '';
  messageType: 'success' | 'error' | '' = '';

  courses = [
    { title: "Web Development", duration: "3 Months", image: "assets/images/course1.png", description: "Build modern websites using HTML, CSS & JS." },
    { title: "AI", duration: "6 Months", image: "assets/images/course2.png", description: "Master artificial intelligence and machine learning." },
    { title: "Data Science", duration: "6 Months", image: "assets/images/course3.png", description: "Analyze data and derive valuable insights." },
    { title: "Digital Marketing", duration: "2 Months", image: "assets/images/course4.jpg", description: "Learn marketing strategies for the digital world." }
  ];

  testimonials = [
    { name: "Sneha C S", feedback: "This institute helped me build strong skills!" },
    { name: "Chandrarekha", feedback: "Great learning experience!" },
    { name: "Deepa", feedback: "Very practical and helpful." },
    { name: "Lakshana", feedback: "Great learning platform!" }
  ];

  constructor(private router: Router) {}

  goToCourses() {
    this.router.navigate(['/courses']);
  }

  subscribe() {
    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (this.email.match(emailRegex)) {
      this.message = "Thank you for subscribing!";
      this.email = '';
    } else {
      this.message = "Please enter a valid email.";
    }
  }
}
