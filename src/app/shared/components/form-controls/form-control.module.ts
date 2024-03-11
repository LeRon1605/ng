import { NgModule } from "@angular/core";
import { TextInputComponent } from "./text-input/text-input.component";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { CommonModule } from "@angular/common";
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [
        TextInputComponent
    ],
    imports: [
        FormsModule,
        InputTextModule,
        CommonModule,
        ButtonModule
    ],
    exports: [
        TextInputComponent
    ]
})
export class ServeSyncFormControlModule { }