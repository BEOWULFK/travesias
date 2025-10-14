import { Component } from '@angular/core';
import { Navbar } from '../../ui/navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [Navbar],
  standalone : true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
