import SharedHero from '../components/shared/SharedHero';
import ContactContext from '../components/contact/ContactContext';
import ContactMap from '../components/contact/ContactMap';
import ContactForm from '../components/contact/ContactForm';

const Contact = props => {
  return (
    <main className="mt-24">
      <SharedHero
        heading="Tell us about your project"
        text="We’d love to hear more about your project. Please, leave a message below or give 
          us a call. We have two offices, one in Texas and one in Tennessee. If you find 
          yourself nearby, come say hello!"
        mod="contact"
      />
      <ContactContext />
      <ContactMap />
      <ContactForm />
    </main>
  );
};

export default Contact;
