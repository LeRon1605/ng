import { NgModule } from "@angular/core";
import { TextInputComponent } from "./text-input/text-input.component";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { CommonModule } from "@angular/common";
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from "./button/button.component";

@NgModule({
    declarations: [
        TextInputComponent,
        ButtonComponent
    ],
    imports: [
        FormsModule,
        InputTextModule,
        CommonModule,
        ButtonModule
    ],
    exports: [
        TextInputComponent,
        ButtonComponent
    ]
})
export class ServeSyncFormControlModule { }