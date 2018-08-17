import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as createjs from 'createjs-module';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements OnInit {
  public static COMPLETED = "complete";
  private queue;

  constructor(private router:Router) {     
  }

  ngOnInit() {
    this.queue = new createjs.LoadQueue(true,'./assets/');
    this.queue.on(LoadingScreenComponent.COMPLETED, this.handleComplete, this);
    this.queue.loadManifest([
        {id: "testImage", src:"testImage.jpg"}
    ]);
  }

  /**
    Method executes once all images gets loaded
  */
  private handleComplete () {
    console.log ("on all images loaded");
    this.router.navigateByUrl('/dashboard');
  }

  public getImageById(id:string) {
    return this.queue.getResult(id);
  }

  

}
