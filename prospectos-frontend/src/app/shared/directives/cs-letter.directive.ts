import { Directive, ElementRef, HostListener, Input, Inject, EventEmitter, Renderer2 } from '@angular/core';

@Directive({
 selector: '[onLetter]'
})
    export class CsLetterDirective {
        private regex: RegExp = new RegExp(/^[ a-zA-Z_áéíóúàèìòùÀÈÌÒÙñÁÉÍÓÚÑÜü\'.\s]*$/g);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        private specialKeys: Array<string> = [ 'Backspace', 'Tab', 'End', 'Home', '-' ];

    constructor(private el: ElementRef) {}

        @HostListener('keydown', [ '$event' ])
        onKeyDown(event: KeyboardEvent) {
        // Allow Backspace, tab, end, and home keys
            if (this.specialKeys.indexOf(event.key) !== -1) {
                return;
            }
            let current: string = this.el.nativeElement.value;
            let next: string = current.concat(event.key);
            if (next && !String(next).match(this.regex)) {
                event.preventDefault();
            }
        }
    }