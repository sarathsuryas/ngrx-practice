import { createReducer,on } from "@ngrx/store";
import { blogState } from "./blog.state";
import { addblog, addblogsuccess, deleteblog, loadBlog, loadblogfail, loadblogsuccess, updateblog } from "./blog.actions";
import { Action } from "rxjs/internal/scheduler/Action";
import { BlogModel } from "./blog.model";



const _blogReducer = createReducer(blogState,on(loadBlog,(state)=>{
  return {
    ...state
  }
}),
on(loadblogsuccess,(state,action)=>{
  return {
    ...state,
    bloglist:[...action.bloglist]
  }
}),
on(loadblogfail,(state,action)=>{
  console.log(action.Errortext)
  return {
    ...state,
    bloglist:[],
    Errormessge:action.Errortext.message
  }
}),
on(addblog,(state,action)=>{
  const _blog = {...action.bloginput}
  _blog.id = state.bloglist.length+1
  return {
    ...state,
    bloglist:[...state.bloglist,_blog]
  }
}),
on(addblogsuccess,(state,action)=>{
  const _blog = {...action.bloginput}
  return {
    ...state,
    bloglist:[...state.bloglist,_blog]
  }
}),
on(updateblog,(state,action)=>{
  const _blog = {...action.bloginput}
 const updatedblog = state.bloglist.map(blog=>{
  return _blog.id === blog.id?_blog:blog;
 })
 return {
  ...state,
  bloglist:updatedblog
 }
}),
on(deleteblog,(state,action)=>{
  const updatedblog = state.bloglist.filter((data:BlogModel)=>{
         return data.id !== action.id
  })
  return {
    ...state,
    bloglist:updatedblog
   }
})
)

export const blogReducer = (state:any,action:any) =>{
  return _blogReducer(state,action)
}