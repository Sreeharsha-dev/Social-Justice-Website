# Social Justice Website

A modern, responsive website for a social justice organization with integrated Razorpay payment gateway for donations.

## Features

- ✅ Modern, responsive design with Tailwind CSS
- ✅ Razorpay payment gateway integration
- ✅ Indian Rupees (₹) currency support
- ✅ Donation system with amount selection
- ✅ One-time and monthly donation options
- ✅ Donor information collection
- ✅ Payment verification and security
- ✅ Event management and gallery
- ✅ Contact forms and admin dashboard
- ✅ Mobile-friendly design

## Payment Integration

### Razorpay Setup

1. **Sign up for Razorpay**
   - Go to [Razorpay](https://razorpay.com) and create an account
   - Complete your business verification

2. **Get API Keys**
   - Navigate to Settings > API Keys
   - Generate a new API key pair
   - Copy the Key ID and Key Secret

3. **Environment Variables**
   Create a `.env.local` file in your project root:
   ```env
   # Razorpay Configuration
   RAZORPAY_KEY_ID=your_razorpay_key_id_here
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret_here
   NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id_here
   ```

### Donation Flow

1. User selects donation amount (₹500, ₹1000, ₹2000, ₹5000, ₹10000) or custom amount
2. User chooses between one-time or monthly donation
3. User fills in personal information
4. Clicks "Proceed to Payment"
5. Razorpay payment modal opens
6. User completes payment
7. Payment is verified on the server
8. User is redirected to thank you page

### API Routes

- `/api/payment/create-order` - Creates a new Razorpay order
- `/api/payment/verify` - Verifies payment signature

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd social-justice-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.local.example` to `.env.local`
   - Add your Razorpay API keys

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Currency Changes

All dollar amounts have been converted to Indian Rupees:
- Event tickets: ₹12,000 per person
- Conference fees: ₹6,000 for professionals, ₹2,000 for students
- Fundraising amounts: ₹75 lakh
- Legal settlements: ₹15 crore

## Security Features

- Payment signatures verified on the server
- Environment variables for sensitive data
- Client-side only receives public key
- Secure payment processing through Razorpay

## Technologies Used

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **UI Components**: Radix UI, shadcn/ui
- **Payment**: Razorpay
- **Icons**: Lucide React

## Project Structure

```
social-justice-website/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── payment/       # Payment-related APIs
│   ├── donate/            # Donation pages
│   └── ...                # Other pages
├── components/            # React components
│   ├── ui/               # UI components
│   └── ...               # Feature components
├── lib/                  # Utility functions
└── public/               # Static assets
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License. 