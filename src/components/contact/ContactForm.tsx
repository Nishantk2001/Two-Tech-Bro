import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';
import styles from './ContactForm.module.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { 
    register, 
    handleSubmit,
    reset,
    formState: { errors } 
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demonstration purposes - in a real app, this would be an API call
    console.log('Form submitted:', data);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {isSubmitted && (
        <div className={styles.successMessage}>
          <p className={styles.successTitle}>Thank you for your message!</p>
          <p className={styles.successText}>We'll get back to you within 24 hours.</p>
        </div>
      )}

      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>
          Your Name
        </label>
        <input
          id="name"
          type="text"
          className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
          placeholder="John Doe"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && (
          <p className={styles.error}>{errors.name.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          Email Address
        </label>
        <input
          id="email"
          type="email"
          className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
          placeholder="john@example.com"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && (
          <p className={styles.error}>{errors.email.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="subject" className={styles.label}>
          Subject
        </label>
        <input
          id="subject"
          type="text"
          className={`${styles.input} ${errors.subject ? styles.inputError : ''}`}
          placeholder="Project Inquiry"
          {...register('subject', { required: 'Subject is required' })}
        />
        {errors.subject && (
          <p className={styles.error}>{errors.subject.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          id="message"
          className={`${styles.textarea} ${errors.message ? styles.textareaError : ''}`}
          placeholder="Tell us about your project..."
          {...register('message', { 
            required: 'Message is required',
            minLength: {
              value: 20,
              message: 'Message should be at least 20 characters'
            }
          })}
        ></textarea>
        {errors.message && (
          <p className={styles.error}>{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`${styles.submitButton} ${isSubmitting ? styles.submitButtonDisabled : ''}`}
      >
        {isSubmitting ? (
          <span className={styles.loadingContent}>
            <svg className={styles.spinner} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          <span className={styles.normalContent}>
            Send Message
            <Send className={styles.sendIcon} />
          </span>
        )}
      </button>
    </form>
  );
};

export default ContactForm;