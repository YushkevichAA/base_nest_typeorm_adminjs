import { ComponentLoader } from 'adminjs';

const componentLoader = new ComponentLoader();

const Components = {
  MyCustomAction: componentLoader.add(
    'MyCustomAction',
    './../components/my-custom-actions',
  ),
  RandomPicture: componentLoader.add(
    'RandomPicture',
    './../components/random-picture',
  ),
  Dashboard: componentLoader.add(
    'Dashboard',
    './../pages/design-system-example',
  ),
  CustomAction: componentLoader.add(
    'CustomAction',
    './../components/custom-action',
  ),
  // other custom components
};

export { componentLoader, Components };
