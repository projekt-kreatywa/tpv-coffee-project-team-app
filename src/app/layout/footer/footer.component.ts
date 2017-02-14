import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'rafszul',
        sanitizer.bypassSecurityTrustResourceUrl('./../../../assets/rafszul.svg'));
  }

  ngOnInit() {
  }

}
