import Head from 'next/head';
import ContactForm from '../../components/contact/ContactForm';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta
          name="description"
          content="Here you can contact me via contact form.Thank you"
        />
      </Head>
      <ContactForm />
    </>
  );
};
export default ContactPage;
