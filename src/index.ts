import '~/assets/css/style.css';
import PulseRadioGroup from '~/components/PulseRadioGroup';

const pulseRadioGroups: NodeListOf<HTMLElement> = document.querySelectorAll(
  '[data-pulse-radio-group]',
);

pulseRadioGroups.forEach((element: HTMLElement) => {
  const pulseRadioGroup = new PulseRadioGroup(element);
  pulseRadioGroup.initialize();
});
