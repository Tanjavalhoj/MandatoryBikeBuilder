import { Component, Input } from '@angular/core'

@Component({
    selector: 'accessories',
    templateUrl: 'frame.component.html'
})
export class AccessoriesComponent{
    @Input('accessories-value') accessories = 0;
    
    onClick(accessoriesValue){
        this.accessories = accessoriesValue;
    }
}