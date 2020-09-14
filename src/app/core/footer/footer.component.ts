import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() formName: string;
  @Output() public saveEmitter = new EventEmitter();
  @Output() public resetEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.saveEmitter.emit();
  }
  reset() {
    this.resetEmitter.emit();
  }
}
