import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() label: string = 'text';
  @Input() type: string = 'text';
  @Input() name: string = '';
	@Input() className: string = 'btn_login';
	@Input() isDisabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
