import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../app/config/firebase.config';

import { AuthGuard } from './auth.service';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { EspressoJournalComponent } from './journals/espresso-journal/espresso-journal.component';
import { FilterJournalComponent } from './journals/filter-journal/filter-journal.component';
import { CoffeeBrewingComponent } from './guides/coffee-brewing/coffee-brewing.component';
import { TeaBrewingComponent } from './guides/tea-brewing/tea-brewing.component';
import { FoodPreparationComponent } from './guides/food-preparation/food-preparation.component';
import { OurCoffeesComponent } from './guides/our-coffees/our-coffees.component';
import { OurTeasComponent } from './guides/our-teas/our-teas.component';
import { ContactsComponent } from './guides/contacts/contacts.component';
import { StocklistComponent } from './stocklist/stocklist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ChatComponent,
    EspressoJournalComponent,
    FilterJournalComponent,
    CoffeeBrewingComponent,
    TeaBrewingComponent,
    FoodPreparationComponent,
    OurCoffeesComponent,
    OurCoffeesComponent,
    OurTeasComponent,
    ContactsComponent,
    StocklistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule.forRoot(),
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
