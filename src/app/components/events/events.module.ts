import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from "./events.component";
import { RouterModule, Routes } from '@angular/router';
import { EventsService } from "./events.service";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CreateEventComponent } from '../create-event/create-event.component';
import { DialogComponent } from '../../utils/components/dialog/dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path : '',
    component : EventsComponent
  }
]

@NgModule({
  declarations: [
    EventsComponent,
    CreateEventComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [CreateEventComponent, DialogComponent],
  bootstrap: [EventsComponent]
})
export class EventsModule { }
