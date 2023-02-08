import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { EntrytableComponent } from './components/entrytable/entrytable.component';
import { UploadComponent } from './components/upload/upload.component';
import {AppRoutingModule} from './app-routing.module';
import {FileService} from './file.service';

@NgModule({
  declarations: [
    AppComponent,
    EntrytableComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, RouterModule
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
