import { ComponentLoader } from 'adminjs';

const componentLoader = new ComponentLoader();

const Components = {
  MyCustomAction: componentLoader.add('MyCustomAction', './my-custom-actions'),
  RandomPicture: componentLoader.add('RandomPicture', './random-picture'),
  // other custom components
};

export { componentLoader, Components };
