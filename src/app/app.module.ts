import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ExpComponent } from './pages/exp/exp.component';
import { InfoComponent } from './pages/info/info.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { LoginComponent } from './pages/login/login.component';
import { MedicalCenterComponent } from './pages/medical-center/medical-center.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RecordComponent } from './pages/record/record.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReporteryComponent } from './pages/reportery/reportery.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { TableWButtonComponent } from './components/table-wbutton/table-wbutton.component';
import { TableRawComponent } from './components/table-raw/table-raw.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, ExpComponent, InfoComponent, InventoryComponent, LoginComponent, MedicalCenterComponent, ProfileComponent, RecordComponent, RegisterComponent, ReporteryComponent, TableComponent, TableWButtonComponent, TableRawComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
