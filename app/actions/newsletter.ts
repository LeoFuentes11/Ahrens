'use server';

import { z } from 'zod';

const NewsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

interface NewsletterState {
  success: boolean;
  message: string;
}

export async function subscribeNewsletter(
  _prevState: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  const raw = { email: formData.get('email') };
  const result = NewsletterSchema.safeParse(raw);

  if (!result.success) {
    return {
      success: false,
      message: result.error.errors[0]?.message ?? 'Invalid email address.',
    };
  }

  // TODO: Add to your email marketing platform (Mailchimp, ConvertKit, etc.)
  // await addSubscriber(result.data.email);

  return {
    success: true,
    message: "You're subscribed! Watch your inbox for the latest from Ahrens.",
  };
}
