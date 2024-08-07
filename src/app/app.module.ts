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
import { ListcommandeComponent } from './pages/admin/listcommande/listcommande.component';
import { UpdateBurgerComponent } from './pages/admin/update-burger/update-burger.component';
import { Burger1Component } from './pages/admin/burger1/burger1.component';
import { RegisterComponent } from './pages/admin/register/register.component';
import { Login1Component } from './pages/admin/login1/login1.component';
import { Commande1Component } from './pages/admin/commande1/commande1.component';
import { CommandeListComponent } from './components/commande-list/commande-list.component';
import { CommandeFormComponent } from './components/commande-form/commande-form.component';
import { CommandeEditComponent } from './components/commande-edit/commande-edit.component';
import { BurgerEditComponent } from './components/burger-edit/burger-edit.component';
import { BurgerListComponent } from './pages/burger-list/burger-list.component';
import { AddBurgerComponent } from './pages/admin/add-burger/add-burger.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { StatistiqueService } from './services/statistique.service';
import { ConnexionComponent } from './connexion/connexion.component';
import { WelcomeComponent } from './welcome/welcome.component';




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
    ListcommandeComponent,
    UpdateBurgerComponent,
    Burger1Component,
    RegisterComponent,
    Login1Component,
    Commande1Component,
    CommandeListComponent,
    CommandeFormComponent,
    CommandeEditComponent,
    BurgerEditComponent,
    BurgerListComponent,
    AddBurgerComponent,
    StatisticsComponent,
    ConnexionComponent,
    WelcomeComponent,
    
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
  providers: [BurgerService,StatistiqueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
