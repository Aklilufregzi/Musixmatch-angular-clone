import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePageComponent {
  segment = 'Albums';
  constructor(private router: Router, private http: HttpClient) {
    this.http
      .post('assets/app.json', { id: 1, name: 'Ak' })
      .toPromise()
      .then((res) => {
        console.log('added');
      });

    this.http
      .get('assets/app.json')
      .toPromise()
      .then((res) => {
        console.log(res);
      });
  }
  addTask() {
    this.router.navigateByUrl('addtask');
  }

  segmentChanged(e) {
    this.segment = e.target.value;
  }
}
