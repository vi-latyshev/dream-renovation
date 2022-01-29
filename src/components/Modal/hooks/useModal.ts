import { useContext } from 'react';

import { ModalContext } from '../context/modal';

import type { ModalContextState } from '../context/modal';

export const useModal = () => useContext<ModalContextState>(ModalContext);
