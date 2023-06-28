import { Modal, ModalTrigger } from '@k-xo/pass-lib';

export default function Home() {
  return (
    <>
      <ModalTrigger
        triggerText="Open Modal"
        modal={
          <Modal>
            <>
              <h1>Modal Content</h1>
              <p>More content...</p>
            </>
          </Modal>
        }
      />
    </>
  );
}
