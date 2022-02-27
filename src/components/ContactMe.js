import React, { Component } from "react";
import Email from "./Email";
class ContactMe extends Component {
  render() {
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.contact;
      var namePlaceholder =
        this.props.resumeBasicInfo.section_name.name_placeholder;
      var emailPlaceholder =
        this.props.resumeBasicInfo.section_name.email_placeholder;
      var messagePlaceholder =
        this.props.resumeBasicInfo.section_name.message_placeholder;
      var emailTemplate =
        this.props.resumeBasicInfo.section_name.email_template;
      var success = this.props.resumeBasicInfo.section_name.Success;
      var error = this.props.resumeBasicInfo.section_name.Error;
    }

    return (
      <section id="contact-form">
        <div className="col-md-12">
          <div className="pb-5 py-5">
            <h1 className="section-title" style={{ color: "black" }}>
              <span>{sectionName}</span>
            </h1>
            {/* ref={form} onSubmit={sendEmail} */}
            <Email
              namePlaceholder={namePlaceholder}
              emailPlaceholder={emailPlaceholder}
              messagePlaceholder={messagePlaceholder}
              emailTemplate={emailTemplate}
              success={success}
              error={error}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default ContactMe;
