import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MyUiModule } from 'src/app/modules/my-ui/my-ui.module';
import { MainScreenComponent } from './components/main-screen/main-screen.component';


@NgModule({
  declarations: [HomeComponent, MainScreenComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MyUiModule
  ]
})
export class HomeModule { }
