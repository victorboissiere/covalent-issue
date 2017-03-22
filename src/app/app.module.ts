import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule, MdIconModule, MdMenuModule, MdToolbarModule, MdButtonModule, MdListModule } from '@angular/material';
import { CovalentCoreModule } from '@covalent/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdIconModule,
    MdMenuModule,
    MdToolbarModule,
    MdButtonModule,
    MdListModule,
    MaterialModule,
    CovalentCoreModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
