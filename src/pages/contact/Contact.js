import PageHeader from "../../components/PageHeader";
import ContactInfo from "../../components/ContactInfo";


const Contact = ({ name, email, location, github, linkedin }) => {
  return (
    <>
      {/* Main Contact Page */}
      <main className="contact container">
        {/* Display the page header */}
        <PageHeader title="Contact"/>

        <div className="contactWrap container">
          <div className="row">
            {/* Display the contact form */}
            <div className="col-12 col-lg-6">
            </div>

            {/* Display the contact information */}
            <div className="col-12 col-lg-6">
              <ContactInfo name={name} github={github} email={email} linkedin={linkedin} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;