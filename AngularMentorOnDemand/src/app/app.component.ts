import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // styleUrls: ['./bootstrap.css']
})
export class AppComponent {
  title = 'MentorOnDemand';
  public str=""

  // test(){
  //   return this.title
  // }
  // onClick($event) {
  //   console.log(event)
  //   console.log("Hey Everyone");
  //   this.str=event.type;
  // }
  // demo(){
  //   var c=document.getElementById('para')
  //   c.innerHTML="this is it"
  //   setInterval(()=>{
  //     console.log('visibility = none')
  //     c.style.display='none'
  //   },3000)
  // }
}
