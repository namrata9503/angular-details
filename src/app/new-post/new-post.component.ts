import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  //userd : number[]  = [1,2,3,4,5,6];
  userIds: Array<number> = [1, 2, 3, 4, 5, 6];
  post: Object = {};
  submitted : boolean = false;
  postId : Object = {};


  constructor( private data : DataService) { }

  ngOnInit() {

  }

  onSubmit() {
   this.submitted = true;
  }

  goBack() {
    this.submitted = false;
  }

  createPost(){
    //console.log(this.data);
      this.data.postCreate(this.post).subscribe((data) => this.postId = data)
  }

  removePost()
  {
    this.data.delRemovePost({id : 1}).subscribe((data) => console.log(data))
  }
}
