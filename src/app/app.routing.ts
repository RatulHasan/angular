import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { SaveTodoComponent } from './save-todo/save-todo.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

const appRoutes: Routes = [
    {
        path : '',
        component : HomeComponent
    },
    {
        path : 'todo',
        component : TodoComponent
    },
    {
        path : 'todo-save',
        component : SaveTodoComponent
    },
    {
        path : 'videos',
        component : VideoListComponent
    },
    {
        path : 'videos/:slug',
        component : VideoDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
