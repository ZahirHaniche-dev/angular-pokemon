import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1> Welcome to {{pokemons[1]}}! </h1>`,
  styles: []
})
export class AppComponent {
  pokemons = ['Bulbizarre', 'Salamèche', 'Carapuce'];
}
