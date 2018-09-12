import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit() {

  }

  onSubmit() {
   this.submitted = true;
  }

  goBack() {
    this.submitted = false;
  }
}
