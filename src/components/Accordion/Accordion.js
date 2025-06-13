import React, { useState } from 'react';

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
// const AccordionCustom = ({ accordionContent }) => {
//   const [open, setOpen] = React.useState(0);

//   console.log(accordionContent);

//   const handleOpen = (value) => setOpen(open === value ? 0 : value);

//   return (
//     <div className="flex-auto">
//       {/* {accordionContent.map(({ key, value }, index) => (
//         <Accordion
//           key={`${key}-${value}`}
//           open={open === index}
//           icon={<Icon id={index} open={open} />}
//         >
//           <AccordionHeader onClick={() => handleOpen(index)}>
//             {key.replaceAll('_', ' ').toUpperCase()}
//           </AccordionHeader>
//           <AccordionBody>{value}</AccordionBody>
//         </Accordion>
//       ))} */}
//       <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
//         <AccordionHeader onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
//         <AccordionBody>
//           We&apos;re not always in the position that we want to be at. We&apos;re constantly
//           growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
//           ourselves and actualize our dreams.
//         </AccordionBody>
//       </Accordion>
//       <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
//         <AccordionHeader onClick={() => handleOpen(2)}>
//           How to use Material Tailwind?
//         </AccordionHeader>
//         <AccordionBody>
//           We&apos;re not always in the position that we want to be at. We&apos;re constantly
//           growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
//           ourselves and actualize our dreams.
//         </AccordionBody>
//       </Accordion>
//       <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
//         <AccordionHeader onClick={() => handleOpen(3)}>
//           What can I do with Material Tailwind?
//         </AccordionHeader>
//         <AccordionBody>
//           We&apos;re not always in the position that we want to be at. We&apos;re constantly
//           growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
//           ourselves and actualize our dreams.
//         </AccordionBody>
//       </Accordion>
//     </div>
//   );
// };

export function AccordionCustom({ title, value }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <>
      <div className="py-2">
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="flex justify-between w-full"
        >
          <span>{title.replaceAll('_', ' ').toUpperCase()}</span>
          <svg
            className="fill-indigo-500 shrink-0 ml-8"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                accordionOpen && '!rotate-180'
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && '!rotate-180'
              }`}
            />
          </svg>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
            accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">{value}</div>
        </div>
      </div>
    </>
  );
}

export default AccordionCustom;
