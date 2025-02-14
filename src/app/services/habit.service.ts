import { Injectable } from '@angular/core';
import { Habit } from '../models/habit.model';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  private habits: Habit[] = [
    { name: 'Drink Water', streak: 5 },
    { name: 'Exercise', streak: 2 },
    { name: 'Read a Book', streak: 7 }
  ];

  getHabits(): Habit[] {
    return this.habits;
  }

  addHabit(habit: Habit): void {
    this.habits.push(habit);
  }

  incrementStreak(habitName: string): void {
    const habit = this.habits.find(h => h.name === habitName);
    if (habit) {
      habit.streak++;
    }
  }
}

