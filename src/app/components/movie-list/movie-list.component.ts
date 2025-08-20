
import { Component, OnInit, TrackByFunction } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common'; // Import CommonModule
import { MovieCardComponent } from '../movie-card/movie-card.component'; // Assuming app-movie-card is MovieCardComponent



@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  imports: [MovieCardComponent,NgFor,CommonModule]
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];
  trackByMovieId!: TrackByFunction<any>;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data;
    });
  }
}