import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PokeInter } from '../pokeinterface/poke-inter';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


/**  This take the complete url, this include two properties : {@link $fullUrl}  and  {@link #SearchTerm} */
    pokemonUrl:string;
 
/**  This property uses an interface that is located in the following link {@link PokeInter}*/
    poke: PokeInter ={}

/**  This take the pokemon name or id, that will be used on the method {@link #searchPokemon} */
    pokemon;

/** This is the endpoint*/
    fullUrl:string='https://pokeapi.co/api/v2/pokemon/';
/** This is the http method*/
  constructor(private http:HttpClient) { }
/**Get the url 
* @param {string} full url   
 @return {string} 
*/
    getData(url:string):any{

    return this.http.get(url)
    
   }

     /**
  *  For more information follow this link : {@link https://pokeapi.co/api/v2/pokemon/25}
  * @param   SearchTerm this take id or pokemon name  
  * @type {(number|string)}
  * @example   looking for a  pokemon by name:  
  * @example <caption> pikachu </caption>
  * @example looking for a  pokemon by  id:
  * @example <caption> 25 </caption>

 
   */
    searchPokemon(SearchTerm:string| number){
      SearchTerm= encodeURIComponent(this.pokemon).trim();


    this.pokemonUrl=`${this.fullUrl}${this.SearchTerm}`;

      this.getData(this.pokemonUrl)
        .subscribe(data =>{
    
          this.poke.name=data.name;
          this.poke.img=data.sprites.front_default;

          this.poke.weight=data.weight;
        });
        
      }

  }
  