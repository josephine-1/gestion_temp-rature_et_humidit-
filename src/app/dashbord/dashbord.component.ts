import { Component } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent {
  imageSrc = 'assets/fanstop.png';
  not = '';
  on = '';
  off = '';
  imageNot= [ {src:'assets/noton.jpg'}]

  imageOn= [ {src:'assets/on.jpg'}]

  imageOff= [ {src:'assets/off.jpg'}]

  imageButtons = [ {src:'assets/fanstop.png', }]
  imageButtonOn = [ {src:'assets/fanrun.gif', }]
constructor() { }
  ngOnInit() {
    
  }
  onClick(imageNameObject: { src: string;  }) {
    this.imageSrc = imageNameObject.src;
  }

onClickon(imageNameObject: { src: string;  }) {
  this.imageSrc = imageNameObject.src;
}

}
