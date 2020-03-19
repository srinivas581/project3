import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fbook',
  templateUrl: './fbook.component.html',
  styleUrls: ['./fbook.component.css']
})
export class FbookComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit() {
  }

}
