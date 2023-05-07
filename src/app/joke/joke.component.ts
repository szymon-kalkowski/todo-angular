import { Component } from '@angular/core';
import { JokeService } from './joke.service';
import { Joke } from './joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss'],
})
export class JokeComponent {
  constructor(private jokeService: JokeService) {}

  joke: Joke = { question: '', punchline: '' };

  ngOnInit(): void {
    this.newJoke();
  }

  newJoke() {
    this.jokeService.getJoke().subscribe((joke) => {
      this.joke = joke[0];
    });
  }
}
