
import React from 'react';
import { useCreateContactQuery } from '@/hooks/useContactQueries';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ContactForm } from '@/types';

const Help = () => {
  const { toast } = useToast();
  const createContactQuery = useCreateContactQuery();
  const [formData, setFormData] = React.useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await createContactQuery.mutateAsync(formData);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy-deep mb-4"> Contact Us </h1>
          <p className="text-lg text-gray-600">We're here to help with any questions you might have</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-bold text-navy-deep mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What is your return policy?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    At Yoko, customer satisfaction is our top priority. If you receive a damaged product or an item that is different from what you ordered, we will promptly replace it with the correct one.

We also offer a refund option, provided that the customer shares an unboxing video clearly showing the issue at the time of opening the package. This helps us ensure transparency and smooth resolution.

For any return or refund requests, please contact our support team within 48 hours of delivery.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What types of products do you sell?
</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yoko offers a curated range of trending gadgets, fashionable clothing, and master copy branded watches — all selected for style, function, and quality.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does shipping take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Standard shipping takes 3-5 business days within India. Express shipping 
                    options are available for faster delivery.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How do I contact customer support?
</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    You can reach us through WhatsApp, call, or our customer support email for any questions or issues. We aim to respond within 24 hours.
                  </p>
                </CardContent>
              </Card>
               <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What is our Payment & Shipping Policy ?

</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    At Yoko, we offer both Cash on Delivery (COD) and Prepaid payment options to give you complete flexibility.
No matter your choice, we ensure fast and reliable shipping all over India.

Shop confidently — your convenience is our priority.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-navy-deep mb-6">Contact Us</h2>
            
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={createContactQuery.isPending}
                    className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-navy-deep"
                  >
                    {createContactQuery.isPending ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="mt-8 space-y-4">
              <div>
                <h3 className="font-semibold text-navy-deep">Email</h3>
                <p className="text-gray-600">yokofashion.yk@gmail.com</p>
              </div>
              {/* <div>
                <h3 className="font-semibold text-navy-deep">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div> */}
              <div>
                <h3 className="font-semibold text-navy-deep">Hours</h3>
                <p className="text-gray-600">Monday - Saturday: 9:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
