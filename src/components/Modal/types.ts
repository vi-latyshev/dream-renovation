import type { FunctionComponent } from 'react';

export enum Action {
    SHOW = 'SHOW',
    HIDE = 'HIDE',
    UNKNOWN = 'UNKNOWN',
}

export type ModalComponentProps = {
    isError?: boolean;
    title: string;
};

export type ModalProps<T> = T & ModalComponentProps;

export type ModalState<T = ModalComponentProps> = Partial<ModalComponentState<T>> & {
    isOpen: boolean;
};

export type ModalComponentState<T = {}, Props = T & ModalComponentProps> = {
    component: FunctionComponent<Omit<Props, 'title'>>;
    props?: Props;
};

export type ActionMap<M extends Record<string, unknown>> = {
    [Key in keyof M]: (M[Key] extends undefined
        ? { type: Key; }
        : { type: Key; payload: M[Key]; }
    )
};
