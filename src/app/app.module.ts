import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HabitListComponent } from './components/habit-list/habit-list.component';
import { HabitItemComponent } from './components/habit-item/habit-item.component';
import { HabitService } from './services/habit.service';

@NgModule({
  declarations: [
    AppComponent,
    HabitListComponent,
    HabitItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HabitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
