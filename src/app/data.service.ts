import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jsonpCallbackContext } from '@angular/common/http/src/module';




@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')

  }

  getUser(id){
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')

  }

  getPost(id){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

  postCreate(data){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(data));
  }

  putUpdate(data)
  {
    return this.http.put('https://jsonplaceholder.typicode.com/posts/'+data.id, JSON.stringify(data));

  }
  delRemovePost(data)
  {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/'+data.id);

  }
}
