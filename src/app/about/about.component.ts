import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  val: number = 0;
  get1() {
    if (this.val == 1)
      this.val = 0;
  }
  get2() {
    if (this.val == 0)
      this.val = 1;
  }

  cnt1: number = 0;
  // timer = setInterval(() => {
  //   // let i: number = 2;
  //   while ( this.cnt1 < 1234) {
  //     // console.log("Block statement execution no." + i)
  //     this.cnt1++;
  //   }
  // }, 10000);

  // timer = interval(10000){}
  projectcount:number = 10000;
  //same process
  accuratecount:number = 0;
  clientcount:number = 0;
  customerfeedback:number = 0;

  projectcountstop:any = setInterval(()=>{
    this.projectcount++;
    //we need to stop this at  particular point; will use if condition
    if(this.projectcount ==12345)
    {
      //clearinterval will stop tha function
      clearInterval(this.projectcountstop);
    }

  },0.)
  
}
