import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Habit Streak Tracker';
  
  constructor() {
    console.log('AppComponent initialized');
  }
}
