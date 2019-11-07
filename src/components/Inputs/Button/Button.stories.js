import React from 'react';
import Button from './button';
import { action } from '@storybook/addon-actions';

export default { 
    component: Button,
    title: 'Button' 
};

export const withText = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const withEmoji = () => <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>;