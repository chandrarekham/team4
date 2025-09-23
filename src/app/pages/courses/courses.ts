import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-courses',
  imports: [CommonModule,RouterModule],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class Courses {

  

  courses = [
    { title: "Web Development", duration: "3 Months", image: "assets/images/course1.png" },
    { title: "AI", duration: "6 Months", image: "assets/images/course2.png" },
    { title: "Data Science", duration: "6 Months", image: "assets/images/course3.png" },
    { title: "Digital Marketing", duration: "2 Months", image: "assets/images/course4.jpg" }
  ];

  
  enroll(course: any) {
  alert(`You enrolled in the ${course.title} course! Our team will get back to you soon.`);
}

}



