// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

// pages
import { AppComponent } from './app.component';

//components
import { CalcuComponent } from './calcu/calcu.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
