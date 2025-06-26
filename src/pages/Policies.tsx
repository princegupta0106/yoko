import React from "react";

const Policies = () => (
  <div className="max-w-3xl mx-auto p-10 bg-white rounded-2xl shadow-lg mt-12 mb-12 border border-gray-200">
    <h1 className="text-4xl font-extrabold mb-8 text-center text-navy-deep tracking-tight">Policies</h1>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-3 text-luxury-gold">Terms and Conditions</h2>
      <div className="text-lg leading-relaxed space-y-3">
        <p>Welcome to Yoko Watches (“we,” “our,” or “us”). By accessing or using our website, you agree to comply with and be bound by these Terms and Conditions.</p>

        <p><strong>1. Use of the Website</strong><br />
        You must be at least 18 years old or accessing the site under the supervision of a parent or legal guardian.<br />
        You agree not to misuse the website for fraudulent or unlawful activity.</p>

        <p><strong>2. Products</strong><br />
        We make every effort to display accurate images and descriptions of our watches.<br />
        Prices and availability are subject to change without notice.</p>

        <p><strong>3. Orders</strong><br />
        We reserve the right to refuse or cancel any order at our discretion.<br />
        You will receive an order confirmation after successful payment.</p>

        <p><strong>4. Payments</strong><br />
        Payments are accepted via secure online payment gateways.<br />
        Prices are listed in INR (or your preferred currency if applicable) and are inclusive of applicable taxes.</p>

        <p><strong>5. Intellectual Property</strong><br />
        All content, including images, text, logos, and designs, is the property of Yoko Watches and may not be used without permission.</p>

        <p><strong>6. Limitation of Liability</strong><br />
        We are not liable for indirect or consequential damages arising from the use of our products or website.</p>

        <p><strong>7. Governing Law</strong><br />
        These terms are governed by the laws of India.</p>
      </div>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-3 text-luxury-gold">Privacy Policy</h2>
      <div className="text-lg leading-relaxed space-y-3">
        <p>Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.</p>

        <p><strong>Information We Collect</strong><br />
        Name, contact number, email, shipping address.<br />
        Payment details (processed through secure third-party gateways).<br />
        Browsing behavior using cookies and analytics tools.</p>

        <p><strong>How We Use Your Information</strong><br />
        To process orders and provide customer service.<br />
        To send order updates, promotional offers, or newsletters (with consent).<br />
        To improve our website and services.</p>

        <p><strong>Data Security</strong><br />
        Your data is protected using SSL encryption and secure servers.<br />
        We never sell or rent your personal information.</p>

        <p><strong>Third-Party Services</strong><br />
        Payment gateways and shipping partners may have access to necessary personal data for order fulfillment.</p>

        <p><strong>Cookies</strong><br />
        We use cookies to enhance user experience and for analytics.</p>

        <p><strong>Your Rights</strong><br />
        You can request access, modification, or deletion of your personal data by contacting us.</p>
      </div>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-3 text-luxury-gold">Return & Refund Policy</h2>
      <div className="text-lg leading-relaxed space-y-3">
        <p>We offer a 5–7 day return policy, which means you have 5 to 7 days after receiving your item to request a return.</p>
        <p>To be eligible for a return, your item must be in the same condition that you received it—unworn or unused, with tags, and in its original packaging.</p>
        <p>Once we receive and inspect your return, we’ll notify you regarding the status of your refund.</p>
        <p>If approved, your refund will be automatically processed to your original payment method within 7 business days.</p>

        <p><strong>Damaged, Defective, Leaked, or Spilled Products</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>A return request must be raised within 7 days of delivery.</li>
          <li>We will arrange a return pickup within 7 days from the delivery date.</li>
          <li>If you opt for a replacement, the product will be delivered within 7–10 business days.</li>
          <li>If a refund is approved, it will be automatically credited to your original payment method within 7 business days.</li>
        </ul>
      </div>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-3 text-luxury-gold">Shipping Policy</h2>
      <div className="text-lg leading-relaxed space-y-3">
        <p><strong>Shipping Time</strong><br />
        Orders are processed within 1–2 business days.<br />
        Products will be delivered within 3–7 business days for domestic orders.</p>

        <p><strong>Delays</strong><br />
        We are not responsible for shipping delays caused by courier partners or natural events.</p>
      </div>
    </section>
  </div>
);

export default Policies;
