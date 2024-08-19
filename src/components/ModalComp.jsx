import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { CardComp } from "./CardComp";

export function ModalComp({ hero }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <CardComp
        setOpenModal={setOpenModal}
        name={hero.name}
        photo={hero.photo}
      />
      <Modal dismissible show={openModal} className="z-[999]" onClose={() => setOpenModal(false)}>
        <Modal.Header>{hero.name}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-8">
              <div className="w-full">
                <img src={hero.photo} alt={hero.name} className="w-full rounded-md" />
              </div>

              <div className="w-full">
                <p>
                  <span className="font-semibold">Nama:</span> {hero.name}
                </p>
                <p>
                  <span className="font-semibold">Tempat Lahir:</span> {hero.birth_place}
                </p>
                <p>
                  <span className="font-semibold">Tgl. Lahir:</span> {hero.birth_date}
                </p>
                <p>
                  <span className="font-semibold">Tgl. Wafat:</span> {hero.death_date}
                </p>
              </div>
            </div>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {hero.description}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
