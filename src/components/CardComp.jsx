import { Card } from "flowbite-react";

export function CardComp({ setOpenModal, name, photo }) {
  return (
    <Card
      className="max-w-[250px]"
      imgAlt={name}
      imgSrc={photo}
    >
      <button onClick={() => setOpenModal(true)} className="text-md font-bold text-start tracking-tight text-gray-900 dark:text-white">
        {name}
      </button>
    </Card>
  );
}
