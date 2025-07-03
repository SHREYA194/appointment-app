import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointments");

    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  newAppointmentTitle : string = "";
  newAppointmentDate : Date = new Date();

  appointments : Appointment[] = [];

  addAppointment() {
    if (this.newAppointmentTitle && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }
      this.appointments.push(newAppointment);

      localStorage.setItem("appointments", JSON.stringify(this.appointments));

      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(this.appointments));
  }
}
