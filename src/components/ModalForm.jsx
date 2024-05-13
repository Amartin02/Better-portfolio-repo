// import { useState, useRef } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
// import emailjs from "emailjs-com";

// const ModalForm = () => {
//   const [show, setShow] = useState(false);

//   const [contactForm, setContactForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: "",
//   });

//   const handleShow = () => setShow(true);
//   const handleClose = () => setShow(false);

//   const formRef = useRef();

//   const handleInputChange = (e) => {
//     console.log(e.target.value);
//     const { name, value } = e.target;
//     setContactForm({ ...contactForm, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     // console.log("i am clicked");

//     // console.log(contactForm);

//     emailjs
//       .sendForm(
//         "service_nor87ak",
//         "template_x6cqyes",
//         formRef.current,
//         "juZ7MA_abfBDMxIOM"
//       )
//       .then((response) => {
//         console.log("Email sent successfully!", response);
//         handleClose();
//       })
//       .catch((err) => {
//         console.log("Email failed to send...", err);
//       });
//   };

//   return (
//     <>
//       <Button
//         className="animatedBorder"
//         onClick={handleShow}
//         size="lg"
//         style={{
//           fontSize: 40,
//           color: "#fff",
//           border: "none",
//         }}
//       >
//         Contact Us
//       </Button>
//       <div
//         className="modal show"
//         style={{ display: "block", position: "initial" }}
//       >
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Dialog>
//             <Modal.Header closeButton>
//               <Modal.Title>Need to Contact Us?</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <Form ref={formRef}>
//                 <Form.Group
//                   className="mb-3"
//                   controlId="formBasicName.ControlName1"
//                 >
//                   <Form.Control
//                     type="text"
//                     placeholder="Name"
//                     value={contactForm.name}
//                     name="name"
//                     onChange={handleInputChange}
//                   />
//                 </Form.Group>
//                 <Form.Group
//                   className="mb-3"
//                   controlId="formBasicPhone.ControlPhone1"
//                 >
//                   <Form.Control
//                     type="text"
//                     placeholder="Phone"
//                     value={contactForm.phone}
//                     name="phone"
//                     onChange={handleInputChange}
//                   />
//                 </Form.Group>
//                 <Form.Group
//                   className="mb-3"
//                   controlId="formBasicEmail.ControlEmail1"
//                 >
//                   <Form.Control
//                     type="text"
//                     placeholder="Email"
//                     value={contactForm.email}
//                     name="email"
//                     onChange={handleInputChange}
//                   />
//                 </Form.Group>
//               </Form>
//             </Modal.Body>
//             <Button
//               size="lg"
//               className="animatedBorder"
//               onClick={handleSubmit}
//               variant="secondary"
//             >
//               Contact Us
//             </Button>
//           </Modal.Dialog>
//         </Modal>
//       </div>
//     </>
//   );
// };

// export default ModalForm;
