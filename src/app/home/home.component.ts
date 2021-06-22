import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import {Observable } from 'rxjs';
import {map , startWith} from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myControl = new FormControl();
  grids= [1,2,3,4,5,6,7,8,9];
  
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
openMain(grid : any){
  if(grid === 1){
    this.router.navigateByUrl('main')
  }
}
}
