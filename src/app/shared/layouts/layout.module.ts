import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SideBarLayout } from "./side-bar-layout/side-bar-layout.component";
import { FooterComponent, HeaderComponent, SideNavigationMenuComponent } from "./";
import { BasicLayoutComponent } from "./basic-layout/basic-layout.component";
import { CoreModule } from "../../core/core.module";

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        SideNavigationMenuComponent,
        SideBarLayout,
        BasicLayoutComponent
    ],
    imports: [
        CoreModule,
        CommonModule,
        RouterModule
    ]
})
export class LayoutModule { }