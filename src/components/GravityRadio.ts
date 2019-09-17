import GravityRadioGroup from '~/components/GravityRadioGroup';
import { TimelineLite, Expo, Elastic } from 'gsap/all';

class GravityRadio {
  public isSelected = false;
  protected radioGroup!: GravityRadioGroup;
  protected element!: HTMLElement;
  protected radio!: HTMLInputElement | null;
  protected indicator!: HTMLElement | null;
  protected indicatorRing!: HTMLElement | null;
  protected indicatorCircle!: HTMLElement | null;
  protected static readonly DURATION = 0.3;

  constructor(radioGroup: GravityRadioGroup, element: HTMLElement) {
    this.radioGroup = radioGroup;
    this.element = element;
    this.radio = element.querySelector('input[type="radio"]');
    this.indicator = element.querySelector('[data-indicator]');

    this.initialize();
  }

  public select(): void {
    this.isSelected = true;
    this.growIndicator();
  }

  public deselect(): void {
    this.isSelected = false;
    this.shrinkIndicator();
  }

  protected initialize(): void {
    this.setupIndicator();
    this.bindEventListener();

    if (this.radio && this.radio.checked) {
      this.select();
    }
  }

  protected bindEventListener(): void {
    if (this.radio) {
      this.radio.addEventListener('change', () => {
        this.select();
        this.radioGroup.radioChanged(this);
      });
    }
  }

  protected setupIndicator(): void {
    if (this.indicator) {
      const ring: HTMLElement = document.createElement('div');
      const circle: HTMLElement = document.createElement('div');

      ring.classList.add(
        'rounded-full',
        'border-2',
        'border-blue-light',
        'w-full',
        'h-full',
        'opacity-0',
        'absolute',
        'top-0',
        'left-0',
      );

      circle.classList.add(
        'rounded-full',
        'bg-purple',
        'w-full',
        'h-full',
        'opacity-0',
        'absolute',
        'top-0',
        'left-0',
      );

      this.indicator.appendChild(ring);
      this.indicatorRing = ring;

      this.indicator.appendChild(circle);
      this.indicatorCircle = circle;
    }
  }

  protected growIndicator(): void {
    if (this.indicator && this.indicatorRing && this.indicatorCircle) {
      const timeline = new TimelineLite({
        ease: Expo.easeIn,
      });

      timeline.to(this.indicatorRing, GravityRadio.DURATION, {
        autoAlpha: 1,
        scale: 0,
      });

      timeline.fromTo(
        this.indicatorCircle,
        GravityRadio.DURATION,
        {
          autoAlpha: 0,
          scale: 0,
        },
        {
          autoAlpha: 1,
          scale: 0.5,
          ease: Expo.easeOut,
        },
        '-=0.1',
      );

      timeline.to(
        this.indicatorRing,
        GravityRadio.DURATION,
        {
          autoAlpha: 0,
          scale: 1,
        },
        '-=0.3',
      );
    }
  }

  protected shrinkIndicator(): void {
    if (this.indicator && this.indicatorRing && this.indicatorCircle) {
      const timeline = new TimelineLite({
        ease: Expo.easeInOut,
      });

      timeline.to(this.indicatorCircle, GravityRadio.DURATION * 2, {
        autoAlpha: 0,
        scale: 0,
        ease: Expo.easeOut,
      });

      /* timeline.fromTo(
        this.indicatorRing,
        GravityRadio.DURATION,
        {
          autoAlpha: 1,
          scale: 0,
        },
        {
          autoAlpha: 0,
          scale: 1,
        },
        '-=0.1',
      ); */
    }
  }
}

export default GravityRadio;
