import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Testimonial } from './pages/testimonials/testimonials';
import { Courses } from './pages/courses/courses';

@Injectable({
  providedIn: 'root'
})
export class Course1 {
 
  private testimonialsUrl = 'https://68d4ecbee29051d1c0ac890e.mockapi.io/api/courses/testimonials';
  private coursesUrl = 'https://68d4ecbee29051d1c0ac890e.mockapi.io/api/courses/courses';

  constructor(private http: HttpClient) {}

  // Testimonials APIs
  getTestimonials(): Observable<Testimonial[]> {
    return this.http.get<Testimonial[]>(this.testimonialsUrl);
  }

  addTestimonial(newTestimonial: Testimonial): Observable<Testimonial> {
    return this.http.post<Testimonial>(this.testimonialsUrl, newTestimonial);
  }

  // Courses APIs
  getCourses(): Observable<Courses[]> {
    return this.http.get<Courses[]>(this.coursesUrl);
  }

  addCourse(newCourse: Courses): Observable<Courses> {
    return this.http.post<Courses>(this.coursesUrl, newCourse);
  }

}



  
  

