import React from 'react';

import Icon, { IconType } from '@components/Icon';

type Props = {
  className?: string;
  size?: string;
};

const ContactMe = ({ className, size }: Props) => {
  return (
    <div className={`flex space-x-5 ${className}`}>
      <Icon iconType={IconType.LinkedIn} size={size} link='https://www.linkedin.com/in/vishnu19/' />
      <Icon iconType={IconType.Github} size={size} link='https://github.com/vishnu4157' />
      <Icon iconType={IconType.Email} size={size} link='mailto:e0727211@u.nus.edu' />
    </div>
  );
};

export default ContactMe;
