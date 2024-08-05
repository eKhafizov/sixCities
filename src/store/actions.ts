import { createAction } from '@reduxjs/toolkit';

export const redirectAction = createAction<string | undefined>('navigation/redirect');
