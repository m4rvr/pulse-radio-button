import PulseRadio from '~/components/PulseRadio';
declare class PulseRadioGroup {
    protected element: HTMLElement;
    protected radios: PulseRadio[];
    constructor(element: HTMLElement);
    initialize(): void;
    radioChanged(radio: PulseRadio): void;
    protected initializeRadios(): void;
    protected deselectAllRadiosExcept(exceptRadio: PulseRadio): void;
}
export default PulseRadioGroup;
