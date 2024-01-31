import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {

  pokemonAll:Pokemon[]|undefined;
  pokemonSelected:Pokemon|undefined;

  constructor(private pokemonService:PokemonService ){}

  ngOnInit(): void {
    this.pokemonService.getPokemonAll()
    .subscribe(
      pokemons => {
        this.pokemonAll = pokemons;

      });
  }

  displayPokemonOne(pokemonId: number): void {
    this.pokemonService.getPokemonByID(pokemonId)
    .subscribe(
      getPokemonByID => {
        this.pokemonSelected = undefined;
        this.pokemonSelected = getPokemonByID;

        console.log(this.pokemonSelected);
      });
  }


  
}
