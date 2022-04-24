export enum Action {
    SHOW = 'SHOW',
    HIDE = 'HIDE',
    UNKNOWN = 'UNKNOWN',
}

export type ModalProps<T = {}> = T;

export type ModalState<T = {}> = Partial<ModalComponentState<T>> & {
    isOpen: boolean;
};

export type ModalComponentState<T = {}> = {
    component: (props: T) => JSX.Element;
    modalProps: T;
};

export type ActionMap<M extends Record<string, unknown>> = {
    [Key in keyof M]: (M[Key] extends undefined
        ? { type: Key; }
        : { type: Key; payload: M[Key]; }
    )
};
