"use client";
import { useState } from "react";

const AccordionItem = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={toggleAccordion}
        className="w-full text-left flex items-center justify-between p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
      >
        <span className="font-medium">{title}</span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-100 text-slate-600">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const items = [
    {
      title: "What types of chairs do you offer?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      title: "How can we get in touch with you?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      title: "Do your chairs come with a warranty?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      title: "What will be delivered? And When?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      title: "Can I try a chair before purchasing?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      title: "How do I clean and maintain my Comforty chair?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
  ];

  return (
    <div className="flex justify-center lg:justify-normal flex-wrap gap-10">
      {items.map((item, index) => (
        <div className="w-[430px]" key={index}>
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
          />
        </div>
      ))}
    </div>
  );
};

export default Accordion;
