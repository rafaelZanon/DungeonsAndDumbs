import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leonardo',
  templateUrl: './leonardo.component.html',
  styleUrls: ['./leonardo.component.css']
})
export class LeonardoComponent implements OnInit {

  nome: string = 'Leonardo V. Leone';
  exposicao: string = 'Exposição Paranormal: 55%';
  entidade: string = 'Entidade : Morte';
  atributosTitulo: string = 'ATRIBUTOS : ';
  vida: string = 'Vida (MAX 72)';
  qtdVida: string = '72';
  _1: string = '-1';
  1: string = '+1';
  _5: string = '-5';
  5: string = '+5';
  morrendo: string = 'Morrendo : ';
  inconsciente: string = 'Inconsciente : ';
  sanidade: string = 'Sanidade : (MAX 24)';
  qtdSanidade: string = '24';
  insano: string = 'Insano';
  pontoDeEsforco: string = 'PE (MAX 28)';
  qtdPE: string = '28';
  atributosEpericiasTitulo: string = 'Atributos e Perícias';
  forca: string = 'Força: 2, ';
  destreza: string = 'Destreza: 4, ';
  constituicao: string = 'Constituição: 2, ';
  inteligencia: string = 'Inteligência 4, ';
  sabedoria: string = 'Sabedoria: 1, ';
  carisma: string = 'Carisma: 1, ';


  constructor() { }

  ngOnInit(): void {
  }

}
