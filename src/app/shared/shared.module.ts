import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NebularModule } from '../nebular/nebular.module';
import { TimingPipe } from '../@theme/pipes';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TimingPipe
  ],
  imports: [
    CommonModule,
    NebularModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NebularModule,
    TimingPipe
  ],
})
export class SharedModule { }
