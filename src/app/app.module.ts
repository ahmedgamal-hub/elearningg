



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { SoonComponent } from './soon/soon.component';
import { CoursesComponent } from './courses/courses.component';
import { SingelCourseComponent } from './singel-course/singel-course.component';
import { RelatedCoursesComponent } from './shared/related-courses/related-courses.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SoonComponent,
    CoursesComponent,
    SingelCourseComponent,
    RelatedCoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
