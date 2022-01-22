import { FieldsInputsMail, LayoutMail } from 'lib/mail';

import { fieldHumanNames } from './constants';

import type { DataValues } from 'lib/superstruct/resolver/types';
import type { SendMailProps } from 'lib/mail';

interface FormTemplateProps {
    subject: string,
    values: DataValues,
}

export const formTemplate = ({ subject, values }: FormTemplateProps): SendMailProps => ({
    fromTitle: 'Контакт форма',
    subject,
    template: (
        <LayoutMail subject={subject}>
            <FieldsInputsMail
                values={values}
                humanNames={fieldHumanNames}
            />
        </LayoutMail>
    ),
});
