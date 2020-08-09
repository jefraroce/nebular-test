import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule, NbLayoutModule, NbInputModule, NbIconModule, NbCardModule, NbButtonModule, NbTreeGridModule, NbUserModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbInputModule,
    NbEvaIconsModule,
    NbIconModule,
    NbCardModule,
    NbButtonModule,
    NbTreeGridModule,
    NbUserModule
  ],
  exports: [
    NbThemeModule,
    NbLayoutModule,
    NbInputModule,
    NbEvaIconsModule,
    NbIconModule,
    NbCardModule,
    NbButtonModule,
    NbTreeGridModule,
    NbUserModule
  ]
})
export class NebularModule { }
