import PulseRadio from '~/components/PulseRadio';

class PulseRadioGroup {
  protected element!: HTMLElement;
  protected radios: PulseRadio[] = [];

  constructor(element: HTMLElement) {
    this.element = element;
  }

  public initialize(): void {
    this.initializeRadios();
  }

  public radioChanged(radio: PulseRadio): void {
    this.deselectAllRadiosExcept(radio);
  }

  protected initializeRadios(): void {
    const radios: NodeListOf<HTMLElement> = this.element.querySelectorAll(
      '[data-pulse-radio]',
    );

    radios.forEach((radio: HTMLElement) => {
      this.radios.push(new PulseRadio(this, radio));
    });
  }

  protected deselectAllRadiosExcept(exceptRadio: PulseRadio): void {
    const otherRadios = this.radios.filter(
      radio => radio !== exceptRadio && radio.isSelected,
    );

    otherRadios.forEach(otherRadio => {
      otherRadio.deselect();
    });
  }
}

export default PulseRadioGroup;
