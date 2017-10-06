import { Component, OnInit } from '@angular/core';

import {Pizzas} from './lista-pizzas/pizza.model'

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  //array
pizzas: Pizzas[] = [
  {
    id:"pizza-portuguesa",
    nome:"portuguesa",
    descricao: "presunto, ovos e cebola cobertos com mussarela",
    estimativa: "4.5",
    valor: "45.33",
    image: "assets/img/pizza/portuguesa.jpg"
  },
  {
    id:"pizza-Mussarela",
    nome:"Mussarela",
    descricao: "Mussarela Scala e tomate fatiado.",
    estimativa: "4.5",
    valor: "35.00",
    image: "assets/img/pizza/mussarela.jpg"
  },
  {
    id:"pizza-Caipira",
    nome:"Caipira",
    descricao: "Filé de frango desfiado, milho e Catupiry",
    estimativa: "4.5",
    valor: "48.00",
    image: "assets/img/pizza/franco_cartupiry.jpg"
  },
  {
    id:"pizza-Palmito",
    nome:"Palmito",
    descricao: "Filé de frango desfiado, milho e Catupiry",
    estimativa: "4.5",
    valor: "38.00",
    image: "assets/img/pizza/palmito.jpg"
  }
]

  constructor() { }

  ngOnInit() {
  }

}
