import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgerComponent } from './pages/burger/burger.component';
import { HttpClientModule } from '@angular/common/http';
import { BurgerService } from './services/burger.service'; 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [BurgerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
