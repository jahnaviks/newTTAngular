import { APIHeader } from './shared/services/http-api-header';
import { AppConstants } from './constants/appconstants';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './core/components/home/home.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerComponent } from './core/components/customer/customer.component';
import { HeaderComponent } from './core/app-header/header.component';
import { RegisterComponent } from './core/components/register/register.component';
import { updateDetailsComponent } from './core/components/home/updateDetails/updateDetails.component';
import { listTeamMembersComponent } from './core/components/home/listTeamMembers/listTeamMembers.component'
import { FormsModule } from '@angular/Forms';
// import { MatTableModule } from '@angular/material';
import { AngularmaterialModule } from './material/angularmaterial/angularmaterial.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    CustomerComponent,
    RegisterComponent,
    updateDetailsComponent,
    listTeamMembersComponent    
  ],
  imports: [
    BrowserModule,
    routing,
    GridModule,
    AngularmaterialModule,
    BrowserAnimationsModule, // routing reference
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:APIHeader,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
