import type { FunctionComponent } from 'react';

export enum Action {
    SHOW = 'SHOW',
    HIDE = 'HIDE',
    UNKNOWN = 'UNKNOWN',
}

export type ModalComponentProps = {
    isError?: boolean;
};

export type ModalProps<T extends ModalComponentProps = {}> = T;

export type ModalState<T = ModalComponentProps> = Partial<ModalComponentState<T>> & {
    isOpen: boolean;
};

export type ModalComponentState<T = {}, Props = T & ModalComponentProps> = {
    component: FunctionComponent<Props>;
    modalProps: Props;
};

export type ActionMap<M extends Record<string, unknown>> = {
    [Key in keyof M]: (M[Key] extends undefined
        ? { type: Key; }
        : { type: Key; payload: M[Key]; }
    )
};
