import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsComponent } from './options.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [OptionsComponent],
  imports: [CommonModule, IonicModule],
  exports: [OptionsComponent],
})
export class OptionsModule {}
