import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  subtitle = 'subtitle';
  magicDigit : number = 7;
  magicNumbers : Array<number> = [1,2,3];
}
