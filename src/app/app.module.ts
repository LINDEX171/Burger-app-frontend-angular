import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgerComponent } from './pages/burger/burger.component';
import { HttpClientModule } from '@angular/common/http';
import { BurgerService } from './services/burger.service'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './pages/menu/menu.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { SignupComponent } from './pages/admin/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule }   from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button'
import { NavComponent } from './pages/admin/nav/nav.component';
import { HomeComponent } from './pages/admin/home/home.component';
import { ContactsComponent } from './pages/admin/contacts/contacts.component';
import { NewcontactComponent } from './pages/admin/newcontact/newcontact.component';


@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    MenuComponent,
    LoginComponent,
    LayoutComponent,
    SignupComponent,
    NavComponent,
    HomeComponent,
    ContactsComponent,
    NewcontactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule
    
    
  ],
  providers: [BurgerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
