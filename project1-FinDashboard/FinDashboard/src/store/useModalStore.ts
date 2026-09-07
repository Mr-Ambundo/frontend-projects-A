import { create } from 'zustand';

export type ModalType = 'addTransaction' | 'addBudget' | 'addInvestment' | null;

interface ModalState {
  activeModal: ModalType;
  openModal: (modal: ModalType) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  activeModal: null,
  openModal: (modal: ModalType) => set({ activeModal: modal }),
  closeModal: () => set({ activeModal: null }),
}));
