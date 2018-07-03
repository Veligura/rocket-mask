import { Directive, Input, OnInit, ElementRef, Renderer2, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms"
import * as Mask from "nebo15-mask";

const {MaskedInput} = Mask;

@Directive({
  selector: 'input[mask]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxRocketMaskDirective),
      multi: true
    },

  ],
})

export class NgxRocketMaskDirective implements ControlValueAccessor {

  private maskExpresion: string = null;
  private mask: any;
  private options: any;

  @Input('mask') set maskOption(mask: string){
    this.maskExpresion = mask;
  }
  @Input() showOnFocus;
  @Input() hideOnBlur;
  @Input() showAlways;
  @Input() withPlaceholder;

  constructor(private elem: ElementRef) {
  }

  registerOnChange(fn: any): void {
    this.options = {
      showOnFocus: this.showOnFocus,
      showAlways: this.showAlways,
      placeholder: this.withPlaceholder
    }
    this.onChange = fn;
    this.mask = new MaskedInput(this.elem.nativeElement, this.maskExpresion, {
      onModelChange: this.onChange,
      ...this.options
    })
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  onChange = (value: string) => {};

  writeValue(value: any): void {
    if (this.mask && value) this.mask.model =  this.mask.autocomplete(value);
  }
}
