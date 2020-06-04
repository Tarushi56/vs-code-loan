import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { LoanformComponent } from './loanform/loanform.component';
import { LoanprogramComponent } from './loanprogram/loanprogram.component';
import { AddClientsComponent } from './add-clients/add-clients.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ViewLoanformComponent } from './view-loanform/view-loanform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';

import { ViewLoanprogramComponent } from './view-loanprogram/view-loanprogram.component';
import { ViewAddclientsComponent } from './view-addclients/view-addclients.component';
import { SearchPipe } from './search.pipe';
import { ViewapplicantComponent } from './viewapplicant/viewapplicant.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { RegisterService } from './register.service';
import { RequestInterceptor } from './request.interceptor';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    HeaderComponent,
    LoanformComponent,
    LoanprogramComponent,
    AddClientsComponent,
    HomeComponent,
    ContactUsComponent,
    ViewLoanformComponent, 
    ViewLoanprogramComponent,
     ViewAddclientsComponent,
     SearchPipe,
     ViewapplicantComponent,
     RegisterComponent,
     ViewCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {path:'loanform',component:LoanformComponent ,data:{roles:['ROLE_CUSTOMER']},canActivate: [AuthGuard]},
      {path:'loanprogram', component:LoanprogramComponent},
      {path:'login',component:LoginComponent},
      {path:'contact-us', component:ContactUsComponent},
      {path:'add-clients', component:AddClientsComponent},
      {path:'home',component:HomeComponent},
      {path:'view-addclients', component:ViewAddclientsComponent},
      {path:'view-loanprogram',component:ViewLoanprogramComponent},
      {path:'view-loanform',component:ViewLoanformComponent},
      {path:'viewapplicant',component:ViewapplicantComponent ,data:{roles:['ROLE_ADMIN','ROLE_LAD']},canActivate: [AuthGuard]},
      {path:'register',component:RegisterComponent},
      {path:'view-customer',component:ViewCustomerComponent} 

    ]),
    BrowserAnimationsModule
  ],
  providers: [
    RegisterService,{
      provide: HTTP_INTERCEPTORS,
      useClass:RequestInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
