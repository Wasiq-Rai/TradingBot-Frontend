import React, { useEffect } from "react";
import ContactOneForm from "../../components/Contact/ContactOneForm";
import ContactOneInfoItem from "../../components/Contact/ContactOneInfoItem";
import LayoutOne from "@/layouts/LayoutOne";
import axios from "axios";

const ContactOne = () => {
  const info_items = [
    {
      icon: "fa-envelope",
      content: (
        <>
          company@gmail.com <br /> infoweb@gmail.com
        </>
      ),
    },
    {
      icon: "fa-phone",
      content: (
        <>
          +84 0977425031
          <br /> +998 765 775 34
        </>
      ),
    },
    {
      icon: "fa-map-marker-alt",
      content: (
        <>
          State/province/area: <br />
          Georgia 198
        </>
      ),
    },
  ];

  useEffect(() => {
    const handler = async () => {
      const options = {
        method: "GET",
        url: "http://localhost:8000/predict/",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": "{{ csrf_token }}",
        },
      };
      console.log("Component has mounted");
      try {
        const res = await axios.get("http://localhost:8000/predict/");
        console.log(res.data)
      } catch (error) {
        console.error(error);
      }
      //  console.log(res.data)
    };
    handler();
  });

  return (
    <LayoutOne>
      <section id="contact" className="contact-area pt-70 pb-110">
        <div className="container">
          {/* section title */}
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-70">
                <span className="sub-title">Contact</span>
                <h2 className="title">
                  <span>Contact</span> ICO Crypto
                </h2>
              </div>
            </div>
          </div>

          {/* secction info */}
          <div className="contact-info-wrap">
            <div className="row justify-content-center">
              {info_items.map((x, index) => (
                <div key={index} className="col-lg-4 col-sm-6">
                  <ContactOneInfoItem item={x} />
                </div>
              ))}
            </div>
          </div>

          {/* section form */}
          <ContactOneForm />
        </div>
      </section>
    </LayoutOne>
  );
};

export default ContactOne;
