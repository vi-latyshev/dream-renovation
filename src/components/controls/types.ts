import type { UseControllerProps } from 'react-hook-form';

export type HookUseControllerProps<T> = Omit<UseControllerProps<T>, 'rules'>;
