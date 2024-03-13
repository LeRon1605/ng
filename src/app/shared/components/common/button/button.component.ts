import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
})
export class ButtonComponent { 
    @Input()
    text!: string;

    @Input()
    disabled: boolean = false;

    @Input()
    loading: boolean = false;

    @Input()
    type!: string;

    @Input()
    styleClass?: string;

    @Output()
    onClick = new EventEmitter<MouseEvent>();
}