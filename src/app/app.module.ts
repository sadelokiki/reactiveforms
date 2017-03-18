import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    WelcomepageComponent,
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
