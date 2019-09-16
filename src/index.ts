import '~/assets/css/style.css';
import GravityRadioButton from '~/components/GravityRadioButton';

const gravityRadioButtons: NodeListOf<HTMLElement> = document.querySelectorAll(
  '[data-gravity-radio]',
);

gravityRadioButtons.forEach((element: HTMLElement) => {
  const gravityRadioButton = new GravityRadioButton(element);
  gravityRadioButton.initialize();
});
