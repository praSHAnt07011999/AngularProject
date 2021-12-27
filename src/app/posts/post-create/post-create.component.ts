import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent{
  enteredTitle = '';
  enteredContent = '';

  constructor(public postsService: PostsService){

  }
  onAddPost(Form: NgForm){
    if(Form.invalid){
      return;
    }
    this.postsService.addPost(Form.value.title, Form.value.content)
  }
}
