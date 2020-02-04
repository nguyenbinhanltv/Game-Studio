import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LogoComponent } from './components/logo/logo.component';
import { TitleComponent } from './components/title/title.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    NavBarComponent,
    LogoComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class MyUiModule { }
