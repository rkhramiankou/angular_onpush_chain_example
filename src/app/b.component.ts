import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'b-comp',
    template: `
        <span>I am B component</span>
        <span>User name: {{user.name}}</span>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BComponent {
    @Input('user') user$;
    user = {name: null};

    constructor(private cd: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.user$.subscribe((user) => {
            if (this.user.name !== user.name) {
                this.cd.markForCheck();
                this.user = user;
            }
        })
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('on changes b');
    }

    ngDoCheck() {
        console.log('do check b');
    }
}