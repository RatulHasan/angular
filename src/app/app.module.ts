import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// RECOMMENDED (doesn't work with system.js)
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// RECOMMENDED (doesn't work with system.js)
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { SaveTodoComponent } from './save-todo/save-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoDetailComponent,
    HomeComponent,
    TodoComponent,
    SaveTodoComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule,
      BsDropdownModule.forRoot(),
      CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
