import GravityRadio from '~/components/GravityRadio';

class GravityRadioGroup {
  protected element!: HTMLElement;
  protected radios: GravityRadio[] = [];

  constructor(element: HTMLElement) {
    this.element = element;
  }

  public initialize(): void {
    this.initializeRadios();
  }

  public radioChanged(radio: GravityRadio): void {
    this.deselectAllRadiosExcept(radio);
  }

  protected initializeRadios(): void {
    const radios: NodeListOf<HTMLElement> = this.element.querySelectorAll(
      '[data-gravity-radio]',
    );

    radios.forEach((radio: HTMLElement) => {
      this.radios.push(new GravityRadio(this, radio));
    });
  }

  protected deselectAllRadiosExcept(exceptRadio: GravityRadio): void {
    const otherRadios = this.radios.filter(
      radio => radio !== exceptRadio && radio.isSelected,
    );

    otherRadios.forEach(otherRadio => {
      otherRadio.deselect();
    });
  }
}

export default GravityRadioGroup;
