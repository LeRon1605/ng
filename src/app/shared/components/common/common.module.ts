import { NgModule } from "@angular/core";
import { LinkComponent } from "./link/link.component";
import { ButtonModule } from 'primeng/button';
import { RouterLink } from "@angular/router";
import { ButtonComponent } from "./button/button.component";

@NgModule({
    declarations: [
        LinkComponent,
        ButtonComponent
    ],
    imports: [
        ButtonModule,
        RouterLink
    ],
    exports: [
        LinkComponent,
        ButtonComponent
    ]
})
export class ServeSyncCommonModule { }