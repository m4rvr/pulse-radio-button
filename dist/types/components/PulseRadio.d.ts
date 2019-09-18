import PulseRadioGroup from '~/components/PulseRadioGroup';
declare class PulseRadio {
    isSelected: boolean;
    protected radioGroup: PulseRadioGroup;
    protected element: HTMLElement;
    protected radio: HTMLInputElement | null;
    protected indicator: HTMLElement | null;
    protected indicatorRing: HTMLElement | null;
    protected indicatorCircle: HTMLElement | null;
    protected static readonly DURATION = 0.3;
    constructor(radioGroup: PulseRadioGroup, element: HTMLElement);
    select(): void;
    deselect(): void;
    protected initialize(): void;
    protected bindEventListener(): void;
    protected setupIndicator(): void;
    protected growIndicator(): void;
    protected shrinkIndicator(): void;
}
export default PulseRadio;
