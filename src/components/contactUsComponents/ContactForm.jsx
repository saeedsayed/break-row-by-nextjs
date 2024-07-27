"use client";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactForm = () => {
  return (
    <div className="w-75 mx-auto bg-white px-4 py-5 rounded-5 shadow" style={{minWidth:'350px'}}>
      <h3 className="text-center mb-4">تواصل معنا</h3>
      <Form>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>الاسم الأول *</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>اسم العائلة *</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>عنوان البريد الإلكتروني *</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phoneNumber">
          <Form.Label>الهاتف *</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>الرسالة *</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          ارسال
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
