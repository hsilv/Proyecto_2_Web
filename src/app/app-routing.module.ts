import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: 'home',
    title: 'Pacientes',
    component: HomeComponent,
  },
  {
    path: '',
    title: 'Bienvenido a MedKit!',
    component: LoginComponent,
  },
  {
    path: 'inventory',
    title: 'Inventario',
    component: InventoryComponent,
  },
  {
    path: 'exp',
    title: 'Expedientes',
    component: ExpComponent,
  },
  
  {
    path: 'register',
    title: 'Regístrate',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
