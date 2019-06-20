import { ChangeDetectorRef, Component, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs/index';

@Component({
    selector: 'a-comp',
    template: `
        <span>I am A component</span>
        <button (click)="changeName()">Trigger change detection</button>
        <b-comp [user]="user"></b-comp>
    `
})
export class AComponent {
    stream = new BehaviorSubject({name: 'A'});
    user = this.stream.asObservable();

    changeName() {
        this.stream.next({name: 'B'});
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('on changes a')
    }

    ngDoCheck() {
        console.log('do check a');
    }
}