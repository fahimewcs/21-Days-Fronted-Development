import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { Engine, ISourceOptions, } from "tsparticles-engine";
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { loadFull } from 'tsparticles';
import { Particle } from '@tsparticles/engine';


@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  searchForm = new FormGroup({
    searchText: new FormControl<string>('')
  });

  

  books = [
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      image: 'https://covers.openlibrary.org/b/id/10594758-L.jpg'
    },
    {
      title: 'Rich Dad Poor Dad',
      author: 'Robert Kiyosaki',
      image: 'https://covers.openlibrary.org/b/id/10958312-L.jpg'
    },
    {
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      image: 'https://covers.openlibrary.org/b/id/11153221-L.jpg'
    },
    {
      title: 'Clean Code',
      author: 'Robert C. Martin',
      image: 'https://covers.openlibrary.org/b/id/9611991-L.jpg'
    }
  ];





    

  onSearch() {
    const value = this.searchForm.controls.searchText.value;
    console.log('Searching for:', value);
  }

}
