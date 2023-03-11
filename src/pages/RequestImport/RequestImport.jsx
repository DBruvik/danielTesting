import { useState } from "react";
import "./RequestImport.css";
import { send } from "emailjs-com";
import React from "react";

const RequestImport = () => {
  const [toSend, setToSend] = useState({
    from_email: "",
    brand: "",
    country: "",
    company_email: "",
    company_number: "",
    extra_details: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_1l66qw9",
      "template_26tll3d",
      toSend,
      "oAcPf2Hkn93AInceM"
    );
    alert("form submitted");
    setToSend({
      from_email: "",
      brand: "",
      country: "",
      company_email: "",
      company_number: "",
      extra_details: "",
    });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="requestImport">
      <h2>Forespør import</h2>
      <form className="requestImportForm" onSubmit={onSubmit}>
        <label>E-post</label>
        <br />
        <input
          type="text"
          placeholder="E-post"
          name="from_email"
          value={toSend.from_email}
          onChange={handleChange}
          required
        />
        <br />
        <label>Merke på racket</label>
        <br />
        <input
          type="text"
          placeholder="Merke"
          name="brand"
          value={toSend.brand}
          onChange={handleChange}
          required
        />
        <br />
        <label>Land racket finnes i</label>
        <br />
        <input
          type="text"
          placeholder="Land"
          name="country"
          value={toSend.country}
          onChange={handleChange}
          required
        />
        <br />
        <label>E-post til firma som har produkt</label>
        <br />
        <input
          type="text"
          placeholder="Firma e-post"
          name="company_email"
          value={toSend.company_email}
          onChange={handleChange}
          required
        />
        <br />
        <label>Nummer til firma som har produkt</label>
        <br />
        <input
          type="text"
          placeholder="Firma nummer"
          name="company_number"
          value={toSend.company_number}
          onChange={handleChange}
          required
        />
        <br />
        <label>Detaljer om racket</label>
        <br />
        <textarea
          className="textArea"
          placeholder="Ekstra detaljer"
          name="extra_details"
          value={toSend.extra_details}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default RequestImport;