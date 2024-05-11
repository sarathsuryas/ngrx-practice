import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './component/blog-page/blog-page.component';
import { CounterdisplayComponent } from './component/counterdisplay/counterdisplay.component';

const routes: Routes = [
  {path:'',component:CounterdisplayComponent},
  {path:'blog',component:BlogPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
