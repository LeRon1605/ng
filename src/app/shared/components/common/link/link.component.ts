import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-link',
    templateUrl: './link.component.html'
})
export class LinkComponent { 
    @Input()
    link!: string;

    @Input()
    text!: string;
}