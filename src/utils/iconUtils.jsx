import * as Icons from 'lucide-react';

const toPascalCase = (str) =>
  str
    .replace(/(^\w|-\w)/g, m => m.replace('-', '').toUpperCase());

export const getIcon = (iconName, size = 24, props = {}) => {
  if (!iconName) return null;

  const IconComponent = Icons[toPascalCase(iconName)];

  if (!IconComponent) return null;

  return <IconComponent size={size} {...props} />;
};