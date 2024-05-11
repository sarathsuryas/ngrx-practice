import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogModel, Blogs } from '../../shared/store/blog/blog.model';
import { getblog, getbloginfo } from '../../shared/store/blog/blog.selector';
import { AppStateModel } from '../../shared/store/Global/AppState.Model';
import { MatDialog } from '@angular/material/dialog';
import { AddblogComponent } from '../addblog/addblog.component';
import { deleteblog, loadBlog } from '../../shared/store/blog/blog.actions';


@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css'
})
export class BlogPageComponent implements OnInit {
  constructor(private store: Store<AppStateModel>, private dialog: MatDialog) { }

  blogList!: BlogModel[]
  bloginfo!:Blogs

  ngOnInit(): void {
    this.store.dispatch(loadBlog())
    this.store.select(getbloginfo).subscribe(item => {
      this.bloginfo = item
      
    })
  }
  AddBlog() {
    this.OpenPopup(0, 'Add Blog')
  }
  OpenPopup(id: any, title: any, isedit = false) {
    this.dialog.open(AddblogComponent, {
      width: '40%',
      data: {
        id: id,
        title: title,
        isedit: isedit
      }
    })
  }

  EditBlog(id: any) {
    this.OpenPopup(id, 'Edit Blog', true)
  }

 RemoveBlog(id:any) {
    if(confirm('Are you Sure You Want to delete')){
      this.store.dispatch(deleteblog({id:id}))
    }
 }
}
