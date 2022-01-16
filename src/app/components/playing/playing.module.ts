import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayingComponent } from './playing.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [PlayingComponent],
  imports: [CommonModule, IonicModule],
  exports: [PlayingComponent],
})
export class PlayingModule {}
