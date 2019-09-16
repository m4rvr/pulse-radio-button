class GravityRadioButton {
  protected element!: HTMLElement;
  protected radio!: HTMLInputElement | null;
  protected indicator!: HTMLElement | null;

  constructor(element: HTMLElement) {
    this.element = element;
    this.radio = element.querySelector('input[type="radio"]');
    this.indicator = element.querySelector('[data-indicator]');
  }

  public initialize(): void {
    this.bindEventListener();
  }

  protected bindEventListener(): void {
    if (this.radio) {
      this.radio.addEventListener('change', (e: Event) => {
        const target: HTMLInputElement = e.target as HTMLInputElement;
      });
    }
  }
}

export default GravityRadioButton;
