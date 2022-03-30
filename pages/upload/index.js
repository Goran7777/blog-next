import Head from 'next/head';
import UploadForm from '../../components/upload/UploadForm';

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
      <UploadForm />
    </>
  );
};
export default ContactPage;
