import '~/assets/css/style.css';
import GravityRadioGroup from '~/components/GravityRadioGroup';

const gravityRadioGroups: NodeListOf<HTMLElement> = document.querySelectorAll(
  '[data-gravity-radio-group]',
);

gravityRadioGroups.forEach((element: HTMLElement) => {
  const gravityRadioGroup = new GravityRadioGroup(element);
  gravityRadioGroup.initialize();
});
