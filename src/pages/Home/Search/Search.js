import React, { useState } from 'react';
import { Button, Modal, TextInput } from 'flowbite-react';

const Search = () => {
    const [openModal, setOpenModal] = useState();
    const props = { openModal, setOpenModal };
    return (
        <div>
            <Button onClick={() => props.setOpenModal('form-elements')}>Search</Button>
        <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-2">
              
              <div>
                <TextInput id="email" placeholder="search your items" required />
              </div>

              <div className="w-full">
                <Button className='mx-auto'>Search</Button>
              </div>
             
            </div>
          </Modal.Body>
        </Modal>
        </div>
    );
};

export default Search;