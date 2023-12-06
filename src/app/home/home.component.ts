import { Component } from '@angular/core';
import {MatTabsModule} from "@angular/material/tabs";
import {FristCompComponent} from "../frist-comp/frist-comp.component";
import {SecondCompComponent} from "../second-comp/second-comp.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatTabsModule,
    FristCompComponent,
    SecondCompComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
