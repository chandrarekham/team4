import { RouterModule, Routes } from '@angular/router';
import { Courses } from './pages/courses/courses';
import { Testimonials } from './pages/testimonials/testimonials';
import { About } from './pages/about/about';
import { Instructors } from './pages/instructors/instructors';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { NgModule } from '@angular/core';


export const routes: Routes = [{ 
    path:'',component:Home},
   {path:'about',component:About},
   {path:'courses',component:Courses},
   {path:'instructors',component:Instructors},
   {path:'testimonials',component:Testimonials},
   {path:'contact',component:Contact},
  
  

   {path:'**',redirectTo:''}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}