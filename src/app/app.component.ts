import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MovieListComponent } from "./components/movie-list/movie-list.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent {
  title = 'movie-app';
}
