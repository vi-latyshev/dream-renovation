import { CalculatorContactFormTitile } from './FormTitle';
import { ContactForm } from './ContactForm';

import type { ContactFormProps } from './ContactForm';

interface CalculatorContactFormProps extends ContactFormProps { }

export const CalculatorContactForm = (props: CalculatorContactFormProps) => (
    <>
        <CalculatorContactFormTitile />
        <ContactForm {...props} />
    </>
);
