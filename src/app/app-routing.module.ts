import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { DetailsComponent } from './details/details.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { NewPostComponent } from './new-post/new-post.component';

const routes: Routes = [

  { path : "", component : UsersComponent },
  { path : "posts" , component : PostsComponent },
  { path : "details/:id" ,  component : DetailsComponent } ,
  { path : "posts" , component : PostsComponent},
  { path : "postDetails/:id" , component : PostDetailsComponent},
  { path : "post/new" , component : NewPostComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
