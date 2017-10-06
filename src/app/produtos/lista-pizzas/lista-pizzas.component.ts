import { Component, OnInit, Input } from '@angular/core';

import {Pizzas} from './pizza.model';

@Component({
  selector: 'app-lista-pizzas',
  templateUrl: './lista-pizzas.component.html'
})
export class ListaPizzasComponent implements OnInit {

  @Input() pizzas: Pizzas
  constructor() { }

  ngOnInit() {
  }

}
