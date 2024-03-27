import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CommercialComponent } from './commercial/commercial.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { HeaderPanelComponent } from './commercial-panel/header-panel/header-panel.component';
import { BorrowerPanelComponent } from './commercial-panel/borrower-panel/borrower-panel.component';
import { AddressPanelComponent } from './commercial-panel/address-panel/address-panel.component';
import { RelationshipPanelComponent } from './commercial-panel/relationship-panel/relationship-panel.component';
import { SecurityPanelComponent } from './commercial-panel/security-panel/security-panel.component';

import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { LoginComponent } from './login/login.component';
import { AuthService } from './Services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CommercialComponent,
    ConsumerComponent,
    HeaderPanelComponent,
    BorrowerPanelComponent,
    AddressPanelComponent,
    RelationshipPanelComponent,
    SecurityPanelComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatExpansionModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
