import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdSnackBarConfig } from '@angular/material';

import { AppComponent, DialogContact } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogContact
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
   entryComponents: [
    DialogContact
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
