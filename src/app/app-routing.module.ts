import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrytableComponent } from './components/entrytable/entrytable.component';
import { UploadComponent } from './components/upload/upload.component';

const routes: Routes = [
  { path: 'upload', component: UploadComponent },
  { path: 'entrytable', component: EntrytableComponent },
 // { path: '', redirectTo: '/upload', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
