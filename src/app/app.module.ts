// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// pages
import { AppComponent } from './app.component';

//components
import { CalcuComponent } from './calcu/calcu.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'homepage', component: HomePageComponent },
  { path: 'calcu',  component: CalcuComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CalcuComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
