import React from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
const AccordionCustom = ({ accordionContent }) => {
  const [open, setOpen] = React.useState(0);

  console.log(accordionContent);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      {accordionContent.map(({ key, value }, index) => (
        <Accordion
          key={`${key}-${value}`}
          open={open === index}
          icon={<Icon id={index} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(index)}>
            {key.replaceAll('_', ' ').toUpperCase()}
          </AccordionHeader>
          <AccordionBody>{value}</AccordionBody>
        </Accordion>
      ))}
    </>
  );
};

export default AccordionCustom;
