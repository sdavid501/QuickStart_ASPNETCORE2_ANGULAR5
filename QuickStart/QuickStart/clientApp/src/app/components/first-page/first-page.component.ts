import { Component, OnInit } from '@angular/core';
import { HelloService } from '../../../_services/hello.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  greetings: any;
  constructor(private helloService: HelloService) { }

  ngOnInit() {
    this.helloService.sayHello()
      .subscribe(
      result => {
        console.log(result);
        this.greetings = result;
      }
      );
  }

}
