import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SoonComponent } from './soon/soon.component';
import { CoursesComponent } from './courses/courses.component';
import { SingelCourseComponent } from './singel-course/singel-course.component';

const routes: Routes = [
   { path: '', component: SearchComponent },
   { path: 'soon', component: SoonComponent },
   { path: 'courses/:name', component: CoursesComponent },
   { path: 'course/:name/description/:id', component: SingelCourseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
