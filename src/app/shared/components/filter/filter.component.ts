import { Component, Input, NgModule, OnInit } from "@angular/core";
import { ActiveFilter, FilterField } from "./filter.shema";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {
    value: string = '1';
    ngOnInit(): void {
        this.filters = [
            {
                field: {
                    id: '1',
                    name: 'Field 1',
                    type: '1',
                    data: [{
                        text: 'Hôm nay',
                        value: '1'
                    }]
                },
                selectedValue: {
                    text: 'Hôm nay',
                    value: '1'
                }
            }
        ];
    }
    @Input()
    fields: FilterField[] = [
        {
            id: '1',
            name: 'Field 1',
            type: '1',
            data: [{
                text: 'Hôm nay',
                value: '1'
            },
            {
                text: 'Hôm nay 2',
                value: '2'
            }],
            selectedValue: {
                text: 'Hôm nay',
                value: '1'
            }
        }
    ]

    // @Input()
    filters: ActiveFilter[] = [
        {
            field: {
                id: '1',
                name: 'Field 1',
                type: '1',
                data: [{
                    text: 'Hôm nay',
                    value: '1'
                }]
            },
            selectedValue: {
                text: 'Hôm nay',
                value: '1'
            }
        }
    ];

    isVisible = false;

    togglePopup() {
        this.isVisible = !this.isVisible;
    }

    changeDropDownBoxValue (args: any) {
        console.log(args);
    }

    syncTreeViewSelection(args: any) {
        console.log('a', args);    
    }
}

@NgModule({
    declarations: [
        FilterComponent,
    ],
    imports: [
        CommonModule,

    ],
    exports: [
        FilterComponent
    ]
})
export class FilterModule { }