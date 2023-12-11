/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
import { Col, Collapse, Container, Row } from 'react-bootstrap';

const Faq = () => {
  const [open, setOpen] = useState();

  const FaqClickHandler = (faqid) => {
    if (open === faqid) {
      setOpen(null);
    } else {
      setOpen(faqid);
    }
  };
  const faqArray = [
    {
      faqId: 1,
      question: 'What is JavaScript used for?',
      answer: 'JavaScript is primarily used for adding interactivity and dynamic behavior to websites.',
    },
    {
      faqId: 2,
      question: 'How do I declare a constant in JavaScript?',
      answer:
        "You can declare a constant in JavaScript using the 'const' keyword. Once a value is assigned to a constant, it cannot be changed.",
    },
    {
      faqId: 3,
      question: "What is the difference between 'null' and 'undefined' in JavaScript?",
      answer:
        "'null' is a deliberate absence of any object value, while 'undefined' means a variable has been declared but has not been assigned a value.",
    },
    {
      faqId: 4,
      question: 'What is the DOM in web development?',
      answer:
        'The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content dynamically.',
    },
    {
      faqId: 5,
      question: 'How do I add event listeners in JavaScript?',
      answer:
        "You can add event listeners using the 'addEventListener' method, which allows you to specify an event type and a function to execute when the event occurs.",
    },
    {
      faqId: 6,
      question: 'What are JavaScript data types?',
      answer:
        'JavaScript has several data types, including numbers, strings, booleans, objects, functions, and more. Each data type is used to represent different kinds of values.',
    },
    {
      faqId: 7,
      question: 'How can I loop through an array in JavaScript?',
      answer:
        "You can loop through an array in JavaScript using 'for' loops, 'while' loops, or array methods like 'forEach'.",
    },
    {
      faqId: 8,
      question: "What is the purpose of the 'this' keyword in JavaScript?",
      answer:
        "The 'this' keyword refers to the current object and is used to access its properties and methods. Its value depends on how and where it is used.",
    },
    {
      faqId: 9,
      question: 'What is a closure in JavaScript?',
      answer:
        'A closure is a function that retains access to variables from its outer scope even after that outer scope has finished executing.',
    },
    {
      faqId: 10,
      question: 'How can I make an asynchronous request in JavaScript?',
      answer:
        'You can make asynchronous requests using technologies like XMLHttpRequest or the fetch API to communicate with servers and fetch data without blocking the main thread.',
    },
  ];

  return (
    <Container className="faq-section w-100 px-3 d-flex flex-column gap-3 pb-5">
      <span className="faqHeading">FAQs</span>
      <Row className="faq-row d-flex flex-column gap-3">
        {faqArray.map((FAQ, index) => {
          const isOpen = open === FAQ.faqId;
          return (
            <Col key={index} className="faq-column" onClick={() => FaqClickHandler(FAQ.faqId)}>
              <div className={`col-content-wrapper p-2`}>
                <div
                  className="faq cursor-pointer fw-600 d-flex justify-content-between"
                  aria-controls="faq-answer"
                  aria-expanded={open}
                >
                  <span className="">{FAQ.question}</span>
                  <img
                    className={`collpase-toggle-arrow ${isOpen ? 'rotate90deg' : ''}`}
                    src="/icons/arrow-collapse.png"
                    alt="icon"
                  />
                </div>
                <Collapse className="faq-collapse mt-2 text-muted" in={isOpen}>
                  <div id="faq-answer">{FAQ.answer}</div>
                </Collapse>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Faq;
