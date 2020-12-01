import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFistComponent } from './my-first/my-fist.component';
import { MyTwoComponent } from './my-two/my-two.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFistComponent,
    MyTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
