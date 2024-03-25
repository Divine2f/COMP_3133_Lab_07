import {Component} from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
  ],
})



@Pipe({
  name: 'replaceDash'
})
export class ReplaceDashPipe implements PipeTransform {

  transform(value: string): string {
    // Replace dashes with empty spaces
    return value.replace(/-/g, ' ');
  }

}


export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}