import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddplaylistComponent } from './addplaylist.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AddplaylistComponent],
  imports: [CommonModule, IonicModule],
  exports: [AddplaylistComponent],
})
export class AddplaylistModule {}
