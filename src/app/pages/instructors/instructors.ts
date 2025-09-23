import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-instructors',
  imports: [CommonModule,RouterModule],
  templateUrl: './instructors.html',
  styleUrl: './instructors.css'
})
export class Instructors { 
  

  instructor = [
    {
      name: 'John Smith',
      expertise: 'Web development',
      email: 'johnsmith@gmail.com',
      phone:9786954347,
      image: "../assets/images/instructor1.jpg",

      showmore: false,
      description:
        'John has over 10 years of experience in web development, specializing in JavaScript, React, and Node.js. He has worked on numerous high-profile projects and loves mentoring new developers.'
    },
   
    {
      name: 'Priya Achar',
      expertise: 'Machine Learning',
      email: 'priyaachar@gmail.com',
      image: '../assets/images/instructor2.jpg',
      phone:8976045632,
      showmore: false,
      description:'Priya Achar has 7 years of experience in Machine Learning, focusing on deep learning, neural networks, and AI model deployment. She has contributed to cutting-edge research projects and enjoys guiding students through complex algorithms and applications.'
    },
     {
      name: 'Harsha Kumar',
      expertise: 'Data Science',
      email: 'harshakumar@gmail.com',
      image: '../assets/images/instructor3.jpg',
      phone:9987631235,
      showmore: false,
      description:'Harsha Kumar has over 8 years of experience in Data Science, specializing in Python, R, and big data analytics. She has helped companies turn complex datasets into actionable insights and is passionate about teaching practical data skills'
       
    },
    {
      name: 'Anita Sharma',
      expertise: 'UI/UX Design',
      email: 'anitasharma@gmail.com',
      image: '../assets/images/instructor4.jpg',
      phone:7895812096,
      showmore: false,
      description:
        
   "Anita Sharma brings 9 years of expertise in UI/UX Design, skilled in user research, wireframing, and prototyping with tools like Figma and Adobe XD. She is dedicated to creating user-friendly digital experiences and mentoring designers on best practices"
    },
  ];

  toggleDetails(index: number): void {
    this.instructor.forEach((inst, i) => {
      inst.showmore = i === index ? !inst.showmore : false;
    });
  }
}
