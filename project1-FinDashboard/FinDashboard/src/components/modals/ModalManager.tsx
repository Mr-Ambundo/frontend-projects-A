import React from 'react';
import { useModalStore } from '../../store/useModalStore.ts';
import { Modal } from '../ui/Modal.tsx';
import { AddTransactionForm } from '../forms/AddTransactionForm.tsx';
import { AddBudgetForm } from '../forms/AddBudgetForm.tsx';
import { AddInvestmentForm } from '../forms/AddInvestmentForm.tsx';

export const ModalManager: React.FC = () => {
  const { activeModal, closeModal } = useModalStore();

  return (
    <>
      <Modal
        isOpen={activeModal === 'addTransaction'}
        onClose={closeModal}
        title="Add Transaction"
      >
        <AddTransactionForm />
      </Modal>

      <Modal
        isOpen={activeModal === 'addBudget'}
        onClose={closeModal}
        title="Create Budget"
      >
        <AddBudgetForm />
      </Modal>

      <Modal
        isOpen={activeModal === 'addInvestment'}
        onClose={closeModal}
        title="Add Investment"
      >
        <AddInvestmentForm />
      </Modal>
    </>
  );
};
