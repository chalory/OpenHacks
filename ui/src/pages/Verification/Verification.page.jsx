import React, { useState, useCallback } from 'react';
import ReactModal from 'react-modal';

function ExampleApp(props) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <div>
      <button onClick={handleOpenModal}>Trigger Modal</button>
      <ReactModal isOpen={showModal} contentLabel="Minimal Modal Example">
        <button onClick={handleCloseModal}>Close Modal</button>
      </ReactModal>
    </div>
  );
}

export default ExampleApp;