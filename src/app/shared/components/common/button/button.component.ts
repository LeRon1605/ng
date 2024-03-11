import { Component, Input } from "@angular/core";

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
}