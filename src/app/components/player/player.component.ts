import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Howl, Howler } from 'howler';
import { Track } from 'src/app/models/artist.model';
import { Line } from 'src/app/models/lyrics.model';
import { LyricsService } from 'src/app/services/lyrics.service';
import { PlayerService } from 'src/app/services/player.service';
import { SongService } from 'src/app/services/song.service';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  currentLineStyle: string;
  currentLine: Line;
  line: string;
  track: Track;
  duration: number;
  playing;
  current;
  songplaying = false;
  position: number;

  noneCurrentLineStyle = 'color: grey; font-size: 20';
  constructor(
    private lyricsService: LyricsService,
    private activatedRoute: ActivatedRoute,
    private songService: SongService,
    public ps: PlayerService
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.track = JSON.parse(params.track);
    });
  }

  ngOnInit() {
    //  let p = new Howler({ src: '' });

    this.ps.playSound(this.track.src);
    this.songplaying = true;
  }

  pausePlay() {
    if (this.songplaying) {
      this.songplaying = false;
      this.ps.sound.pause(this.current);
    } else {
      this.songplaying = true;
      this.ps.sound.play();
    }
  }

  next() {
    this.ps.sound.stop();
    let t = this.songService.getTrack(this.track.id + 1);
    console.log(this.songService.getTrack(this.track.id + 1));
    this.ps.sound = new Howl({ src: t.src });
    this.track = t;
    this.ps.sound.play();
  }

  back() {
    if (this.track.id == 1) {
      this.ps.sound.stop();
      let t = this.songService.getTrack(
        this.songService.getTracks().length - 1
      );

      console.log(t);
      this.ps.playSound(t.src);
      this.track = t;
      this.ps.sound.play();
    } else {
      this.ps.sound.stop();
      let t = this.songService.getTrack(this.track.id - 1);
      console.log(this.songService.getTrack(this.track.id - 1));
      this.ps.playSound(t.src);
      this.track = t;
      this.ps.sound.play();
    }

    this.ps.sound.stop();
    let t = this.songService.getTrack(this.track.id - 1);
    console.log(this.songService.getTrack(this.track.id - 1));
    this.ps.playSound(t.src);
    this.track = t;
    this.ps.sound.play();
  }

  sync() {
    //start a timer and sync with set interval
    setInterval(function () {}, 1000);
  }

  rangeChange(e) {
    this.position = e.target.value;
    this.ps.sound.seek(e.target.value);
  }
}
