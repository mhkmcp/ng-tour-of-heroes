import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { HEROES } from '../../mock-heroes';
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;

  heroes: Hero[];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero:Hero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.heroes
        .subscribe(heroes => this.heroes = heroes);
  }

}
