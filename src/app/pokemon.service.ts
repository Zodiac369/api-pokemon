import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonAll():Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getAll')

  }

  getPokemonByID(pokemonId: number): Observable<Pokemon> {
    return this.http.get<Pokemon>('http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getById&id=' + pokemonId);

  }

  postPokemon(): void {

  }

  deletePokemon(): void {

  }

}
