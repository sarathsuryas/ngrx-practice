import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogModel } from './store/blog/blog.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  constructor(private http: HttpClient) { }

  GetAllBlogs(): Observable<BlogModel[]> {
    return this.http.get<BlogModel[]>("http://localhost:5000/blogs")
  }

  CreateBlog(bloginput:BlogModel) {
    
    
    return this.http.post("http://localhost:5000/blogs",bloginput).pipe(
      tap(()=>{
        this.http.get<BlogModel>("http://localhost:5000/blogs?_limit=1&_sort=id&_order=desc").subscribe(data=>{
          console.log(data)
        }) })
    )
  }

  UpdateBlog(bloginput:BlogModel){
        return 
  }

}

