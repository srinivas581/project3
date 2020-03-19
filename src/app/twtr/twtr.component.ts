import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-twtr',
  templateUrl: './twtr.component.html',
  styleUrls: ['./twtr.component.css']
})
export class TwtrComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit() {
  }

}
