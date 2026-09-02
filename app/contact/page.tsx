"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Mail, MapPin, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.service || !formData.budget) {
      alert("Please select both a content type and a budget range.");
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      alert("Your message has been sent successfully!");

      setFormData({
        name: "",
        email: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  const whatsappNumber = "923337784823";

  const whatsappMessage = encodeURIComponent(
    "Hello Romana, I would like to discuss a content writing project with you."
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's Collaborate
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you need engaging articles, strategic SEO content, or
            compelling web copy, I'm here to help.
          </p>
        </section>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* WhatsApp Card */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Let's Talk on WhatsApp
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex flex-col items-center justify-center text-center py-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                    <MessageCircle className="h-8 w-8 text-blue" />
                  </div>

                  <h2 className="text-2xl font-semibold mb-3">
                    Start a Conversation
                  </h2>

                  <p className="text-muted-foreground max-w-xl mb-6">
                    Have a project in mind? Contact me directly on WhatsApp to
                    discuss your requirements, content needs, and project
                    details.
                  </p>

                  <Button size="lg" asChild>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-blue" />
                  </div>

                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">
                      romana.acemedassist@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-blue" />
                  </div>

                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Pakistan</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Card */}
            <Card>
              <CardHeader>
                <CardTitle>WhatsApp</CardTitle>
              </CardHeader>

              <CardContent>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-blue" />
                  </div>

                  <div>
                    <p className="font-medium">Chat with me</p>
                    <p className="text-muted-foreground">
                      +92 3337784823
                    </p>
                  </div>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Response Time</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  I typically respond within 24 hours. If your content request
                  is urgent, please reach out via WhatsApp.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <section className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Our Location</CardTitle>
            </CardHeader>

            <CardContent className="p-0">
              <div className="overflow-hidden rounded-b-lg">
                <iframe
                  src="https://www.google.com/maps?q=Pakistan&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96"
                ></iframe>
              </div>

              <div className="p-4 text-center">
                <p className="text-muted-foreground">
                  Serving clients globally from Pakistan
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
}