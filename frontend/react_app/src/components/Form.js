import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export const FormInput = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [sourcecontrol, setSourceControl] = useState("");
  const [teamnum, setTeamNum] = useState(0);

  const [showmodal, setShowModal] = useState(false);

  // const formData = {
  //   username: username,
  //   email: email,
  //   sourcecontrol: sourcecontrol,
  //   teamnum: teamnum,
  // };

  const handleonSubmit = () => {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("sourcecontrol", sourcecontrol);
    formData.append("teamnum", teamnum);
    console.log(formData);
    axios
      .post("http://127.0.0.1:8000/api/email/", {
        data: {
          username: username,
          email: email,
          sourcecontrol: sourcecontrol,
          teamnum: teamnum,
        },
      })
      .then((response) => {
        // setShowModal(true);
      });
  };

  const handleontest = () => {
    console.log(username);
    console.log(teamnum);
    console.log(sourcecontrol);
    console.log(email);
  };

  const handleChange = (e) => {
    switch (e.target.id) {
      case "username":
        setUsername(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "sourcecontrol":
        setSourceControl(e.target.value);
        break;
      case "teamnum":
        setTeamNum(e.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicUser">
        <Form.Label>Username</Form.Label>
        <Form.Control
          onChange={(e) => handleChange(e)}
          type="username"
          placeholder="Username"
          id="username"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) => handleChange(e)}
          type="email"
          placeholder="Enter email"
          id="email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSourceControl">
        <Form.Label>Favorite source control</Form.Label>
        <Form.Control
          onChange={(e) => handleChange(e)}
          type="sourcecontrol"
          placeholder="Github, Gitlab etc."
          id="sourcecontrol"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTeamNum">
        <Form.Label>How many people in your team?</Form.Label>
        <Form.Control
          onChange={(e) => handleChange(e)}
          type="teamnum"
          placeholder="0"
          id="teamnum"
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleonSubmit}>
        Submit
      </Button>

      <Modal show={showmodal}>
        <Modal.Header>
          <Modal.Title>Thanks for submitting successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>I'll be responding shortly!</Modal.Body>
      </Modal>
    </Form>
  );
};

export default FormInput;
