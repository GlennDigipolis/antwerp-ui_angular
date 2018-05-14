import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor,  NG_VALUE_ACCESSOR } from '@angular/forms';

import { UploadOptions } from '../upload/upload.const';

@Component({
    selector: 'aui-upload-input',
    templateUrl: './upload-input.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: UploadInputComponent,
        multi: true
    }]
})
export class UploadInputComponent implements ControlValueAccessor {
    @Input() public options: UploadOptions;
    @Input() public format: any;

    public propagateChange = (_: any) => {};

    public writeValue(value: any) {}

    public registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched() {}

    public onUpload(files) {
        const data = (this.format ? this.format(files) : files);
        this.propagateChange(data);
    }
}
