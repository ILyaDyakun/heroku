import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  public buttonText = '';

	@Input()
	set text(name: string) {
		this.buttonText = name;
	}
	get name(): string {
		return this.buttonText;
	}

	@Input() type: string = 'button';
	@Input() className: string = 'btn_login';
	@Output() btnClick = new EventEmitter();
	@Input() isDisabled = false;

	constructor() {}

	onClick() {
		this.btnClick.emit();
	}
}