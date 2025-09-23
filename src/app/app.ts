import { Component, NgModule, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { Courses } from './pages/courses/courses';
import { Testimonials } from './pages/testimonials/testimonials';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Instructors } from './pages/instructors/instructors';
import { Contact } from './pages/contact/contact';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,Courses,Testimonials,Home,About,Instructors,Contact,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('project1');
}
