import { Injectable } from '@angular/core';
import { SongService } from './song.service';
import { Howl } from 'howler';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  public sound = null;

  constructor(private ss: SongService) {}

  playSound(src) {
    if (this.sound != null) {
      this.sound.stop();
      this.sound.unload();
      this.sound = null;
    }
    this.sound = new Howl({
      src: src,
    });
    this.sound.play();
  }
}
