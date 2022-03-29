import Image from 'next/image';
import classes from './hero.module.scss';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          className={classes.image}
          src="/images/site/me.jpg"
          width={300}
          height={300}
          alt="my image"
        />
      </div>
      <h1>Hi I 'm Goran</h1>
      <p>I blog about web development - JS frameworks</p>
    </section>
  );
};

export default Hero;
