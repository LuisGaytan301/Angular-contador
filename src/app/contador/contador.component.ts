import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
 
  constructor() { }
  counter:number = 0;
 
  add(){
    this.counter++;
  }
  sus(){
    this.counter--;
    if(this.counter<0){
      this.counter=0;
    }
  }
  reset(){
    this.counter=0;
  }




  ngOnInit(): void {
  }

}
