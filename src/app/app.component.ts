import { Component } from '@angular/core';
import { ComponentFixtureNoNgZone } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My primer app';
}
