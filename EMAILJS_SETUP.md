# Email.js Setup Guide

This guide will help you set up Email.js for the contact form in your portfolio.

## Steps to Set Up Email.js

### 1. Sign Up for Email.js

1. Go to [Email.js](https://www.emailjs.com/)
2. Sign up for a free account (or log in if you already have one)

### 2. Create an Email Service

1. Go to **Email Services** in your Email.js dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID**

### 3. Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use the following template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Save the template and copy your **Template ID**

### 4. Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** and copy it

### 5. Update Your Contact Component

Open `app/components/Contact.tsx` and update the following:

1. **Initialize Email.js** (in the useEffect hook):
```typescript
useEffect(() => {
  emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your public key
}, []);
```

2. **Update the send function** (in the onSubmit function):
```typescript
await emailjs.send(
  'YOUR_SERVICE_ID', // Replace with your Service ID
  'YOUR_TEMPLATE_ID', // Replace with your Template ID
  {
    from_name: data.name,
    from_email: data.email,
    message: data.message,
  }
);
```

### 6. Test Your Contact Form

1. Run your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email inbox for the message

## Security Notes

- **Never commit your Email.js credentials to version control**
- Consider using environment variables for production:
  ```env
  NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
  ```
- Then update your code to use:
  ```typescript
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  
  await emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    { ... }
  );
  ```

## Free Tier Limits

- 200 emails per month
- Perfect for portfolio websites

## Troubleshooting

- **Emails not sending**: Check browser console for errors
- **Service ID error**: Verify your Service ID is correct
- **Template ID error**: Verify your Template ID is correct
- **Public Key error**: Make sure Email.js is initialized with your public key

## Additional Resources

- [Email.js Documentation](https://www.emailjs.com/docs/)
- [Email.js React Guide](https://www.emailjs.com/docs/examples/reactjs/)


