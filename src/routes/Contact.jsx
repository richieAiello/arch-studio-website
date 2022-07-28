import SharedHero from '../components/shared/SharedHero';

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
    </main>
  );
};

export default Contact;
