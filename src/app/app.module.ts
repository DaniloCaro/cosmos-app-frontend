import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//RoutingModule
import { AppRoutingModule } from './app-routing.module';
//Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
