'use server';

import { z } from 'zod';

const ContactSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(100),
  lastName: z.string().min(1, 'Last name is required').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().max(20).regex(/^[\d\s+\-()*#]*$/, 'Invalid phone number format').optional().or(z.literal('')),
  company: z.string().optional(),
  enquiryType: z.enum(
    ['general', 'design-construct', 'mining', 'steel', 'water', 'sheds', 'silos', 'careers'],
    { errorMap: () => ({ message: 'Please select a valid enquiry type' }) }
  ),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
});

interface ContactState {
  success: boolean;
  message: string;
  errors: Record<string, string[]>;
}

export async function submitContactForm(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const raw = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    company: formData.get('company'),
    enquiryType: formData.get('enquiryType'),
    message: formData.get('message'),
  };

  const result = ContactSchema.safeParse(raw);

  if (!result.success) {
    return {
      success: false,
      message: 'Please correct the errors below.',
      errors: result.error.flatten().fieldErrors,
    };
  }

  // TODO: Send email via your preferred email service (Resend, SendGrid, etc.)
  // await sendEmail({ to: 'info@ahrens.com.au', ...result.data });

  return {
    success: true,
    message: "Thanks for reaching out. We'll be in touch within one business day.",
    errors: {},
  };
}
