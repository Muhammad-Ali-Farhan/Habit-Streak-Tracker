import { Component, Input } from '@angular/core';
import { Habit } from '../../models/habit.model';

@Component({
  selector: 'app-habit-item',
  templateUrl: './habit-item.component.html',
  styleUrls: ['./habit-item.component.scss']
})
export class HabitItemComponent {
  @Input() habit!: Habit;
}

