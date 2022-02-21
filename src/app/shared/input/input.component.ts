import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() label: string = 'text';
  @Input() type: string = 'text';
  @Input() name: string = '';
  @Input() id: string = '';
	@Input() className: string = 'btn_login';
	@Input() isDisabled = false;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public onValueChange(event: string): void {
    this.valueChange.emit(event)
  }

}
