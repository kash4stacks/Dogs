import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})

export class DogsComponent implements OnInit {
    name: string = '' || 'otto';

    construcor() {

    }

    ngOnInit() {

    }
}
