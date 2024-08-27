import React from 'react';
import { storiesOf } from '@storybook/react';
import UsageHover from './hooks/UsageHover'
import UsageScript from './hooks/UsageScript'

const stories = storiesOf('Hooks', module);

stories
    .add('useHover', () => <UsageHover />)
    .add('useScript', () => <UsageScript />)