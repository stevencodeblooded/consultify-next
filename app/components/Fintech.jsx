import Image from 'next/image';
import styles from './FintechSection.module.css';

const FintechSection = () => {
  return (
    <div className="container content-section">
      <div className="row align-items-center">
        <div className="col-md-4 text-content">
          <h2 className='mb-4'>How Do Fintech Software Development Technologies Work with us</h2>
          <p>
            The professionals at the Texas-based business DocTrace provide dependable engineering solutions to the construction industry and the general public. Due to the extensive document exchanges inherent in this procedure, the company set out to create a safe and user-friendly document management system for
          </p>
          <a href="#" className={`${styles.readMore}`}>
            Read more <span className={styles.arrow}>→</span>
          </a>
        </div>
        <div className="col-md-8 image-content text-center">
          <Image
            src="/assets/fintechSoftware.svg"
            alt="Laptop image"
            width={500}
            height={300}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default FintechSection;