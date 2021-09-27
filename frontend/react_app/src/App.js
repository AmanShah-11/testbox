import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { PopupButton, Widget } from "@typeform/embed-react";
import * as typeformEmbed from "@typeform/embed-react";
import { Button, Form, Modal } from "react-bootstrap";
// import { Button, Header, Image, Modal } from "semantic-ui-react";

// export const App2 = () => {
//   const [showmodal, setShowModal] = useState(false);
//   const handleonClick = () => {
//     console.log(showmodal);
//     setShowModal(!showmodal);
//   };

//   return (
//     <div>
//       <Modal show={showmodal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleonClick}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleonClick}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//       <Button onClick={handleonClick}>Click me!</Button>
//     </div>
//   );
// };

export const App3 = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

// const popup1 = typeformEmbed.makePopup(
//   "https://amanshah-11.github.io/personal-website2/",
//   {
//     mode: "popup",
//     autoClose: 3000,
//     hideHeaders: true,
//     hideFooters: true,
//   }
// );

{
  /* <button onClick={handleonClick} type="submit">
        Click Me!
      </button> */
}
{
  /* <Widget
        id="<form-id>"
        style={{ width: "100%", height: "100%" }}
        className="my-form"
      /> */
}
{
  /* <PopupButton
        id="<form-id>"
        style={{ fontSize: 20 }}
        className="my-button"
      >
        click to open form in popup
      </PopupButton> */
}
