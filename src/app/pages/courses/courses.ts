import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Course1 } from '../../course1';

@Component({
  selector: 'app-courses',
  imports: [CommonModule,RouterModule,HttpClientModule],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
  standalone:true
})



export class Courses implements OnInit {

  courses: any[] = [];  // No model used

  constructor(private course1: Course1) {}

  ngOnInit(): void {
    this.course1.getCourses().subscribe({
      next: (data: any[]) => {
        this.courses = data;
      },
      error: (err) => {
        console.error('Failed to fetch courses:', err);
      }
    });
  }

  enroll(course: any) {
    alert(`You enrolled in the ${course.title} course! Our team will get back to you soon.`);
  }
}


// export class Courses {

  

//   courses = [
//     { title: "Web Development", duration: "3 Months", image: "assets/images/course1.png" },
//     { title: "AI", duration: "6 Months", image: "assets/images/course2.png" },
//     { title: "Data Science", duration: "6 Months", image: "assets/images/course3.png" },
//     { title: "Digital Marketing", duration: "2 Months", image: "assets/images/course4.jpg" }
//   ];

  
//   enroll(course: any) {
//   alert(`You enrolled in the ${course.title} course! Our team will get back to you soon.`);
// }

// }



