import { useContext } from 'react';
import { ModalTemplate } from '../../components/Modal/Template';
import { ModalContext } from '../../contexts/ModalContext/ModalContext';

const TestPage = () => {
  const { showModal, setShowModal, handleShowModal } = useContext(ModalContext);



  return (
    <>
      {showModal && <ModalTemplate modalType={showModal} />}
      <h1>teste</h1>
      <button
        type='button'
        onClick={() => {
          handleShowModal('sleeping');
        }}
      >
        Registro de Sono
      </button>
      <button
        type='button'
        onClick={() => {
          handleShowModal("exercise");
        }}
      >
        Exercícios
      </button>
      <button
        type='button'
        onClick={() => {
          handleShowModal("reading");
        }}
      >
        Leitura
      </button>
    </>
  );
};

export { TestPage };

