import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePageComponent {
  segment = 'Albums';
  constructor(private router: Router) {}
  addTask() {
    this.router.navigateByUrl('addtask');
  }

  segmentChanged(e) {
    this.segment = e.target.value;
  }
}
