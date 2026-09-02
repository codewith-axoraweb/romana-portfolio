import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, FileText, PenLine, Search, Newspaper, MessageCircle } from "lucide-react"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "  Romana Wasem's Services - Best Content Writing & SEO Copywriting",
  description:
    "Hire   Romana Wasemfor top content writing services in Pakistan, including SEO content, blog writing, and copywriting to elevate your brand.",
  keywords: [
    "best content writing services",
    "content writing services in Pakistan",
    "article writing services in Pakistan",
    "content writing agency",
    "best SEO content writer in Pakistan",
    "freelance content writer",
    "SEO copywriting",
    "blog writing services",
    "professional content writing services",
    "content writer Karachi",
  ],
  authors: [{ name: "  Romana Wasem" }],
  openGraph: {
    title: "  Romana Wasem's Services - Best Content Writing & SEO in Pakistan",
    description:
      "  Romana Wasemoffers expert content writing services in Pakistan, including SEO content, blog writing, and copywriting for businesses worldwide.",
    type: "website",
    url: "https://storycup.vercel.app/services", // Replace with your actual Services page URL
    images: [
      {
        url: "/services-og-image.jpg", // Replace with a relevant image for the Services page
        width: 1200,
        height: 630,
        alt: "  Romana WasemBest Content Writing Services",
      },
    ],
    siteName: "  Romana WasemPortfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "  Romana Wasem's Services - Best Content Writing & SEO",
    description:
      "Hire   Romana Wasemfor professional content writing, SEO content, and blog writing services in Pakistan and beyond.",
    images: ["/services-og-image.jpg"], // Replace with your actual image
  },
  alternates: {
    canonical: "https://storycup.vercel.app/services", // Replace with your actual Services page URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Content Writing",
      provider: {
        "@type": "Person",
        name: "  Romana Wasem",
      },
      url: "https://storycup.vercel.app/services", // Replace with your actual Services page URL
      sameAs: [
        "https://www.linkedin.com/in/  Romana Wasem", // Replace with your actual LinkedIn
        "https://twitter.com/  Romana Wasem", // Replace with your actual Twitter
      ],
      description:
        "  Romana Wasemprovides top content writing services in Pakistan, specializing in SEO content, blog writing, article writing, and copywriting for businesses globally.",
      areaServed: [
        "Pakistan",
        "Karachi",
        "USA",
        "Dubai",
        "Australia",
        "UK",
      ],
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        description: "Professional content writing services including SEO content, blog writing, and copywriting",
      },
    }),
  },
};

const services = [
  {
    icon: FileText,
    title: "Blog & Article Writing",
    description: "Engaging, SEO-optimized content that drives traffic and builds brand authority.",
    features: ["Keyword Research", "On-page SEO", "Original & Researched Content", "Quick Turnaround"],
    price: "Starting at $100/article",
  },
  {
    icon: PenLine,
    title: "Website Copywriting",
    description: "Compelling copy for homepages, about pages, service pages, and more.",
    features: ["Conversion-Focused", "Brand Voice Aligned", "SEO Optimized", "Clear CTAs"],
    price: "Starting at $300/page",
  },
  {
    icon: Newspaper,
    title: "Press Releases & PR Writing",
    description: "Professional press releases to announce product launches, events, and company news.",
    features: ["Industry Targeted", "Journalistic Style", "Distribution-Ready", "Fast Delivery"],
    price: "Starting at $250/release",
  },
  {
    icon: Search,
    title: "SEO Content Strategy",
    description: "Content strategy planning to improve rankings and support business goals.",
    features: ["Content Audit", "SEO Planning", "Content Calendar", "Performance Reports"],
    price: "Custom Quote",
  },
]

const packages = [
  {
    name: "Starter",
    price: "$10",
    description: "Perfect for startups and personal brands",
    features: [
      "3 blog posts (up to 1,000 words)",
      "1 landing page",
      "SEO keyword integration",
      "Basic content calendar",
      "Email support",
    ],
    popular: false,
      discount: "25% OFF",

  },
  {
    name: "Professional",
    price: "$50",
    description: "Ideal for growing businesses and agencies",
    features: [
      "6 blog posts (up to 1,200 words)",
      "3 pages of website copy",
      "Advanced SEO strategy",
      "Monthly content calendar",
      "Priority support",
    ],
    popular: true,
    discount: "30% OFF",
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    description: "For brands with large-scale content needs",
    features: [
      "Custom blog volume",
      "Sales copy & campaigns",
      "Full SEO & content audit",
      "Custom strategy & reports",
      "Dedicated account support",
    ],
    popular: false,
    discount: "0% OFF",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Content Writing Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            High-quality, strategic writing that informs, converts, and connects with your audience.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">What I Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-blue" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <Badge variant="secondary">{service.price}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Pricing Packages */}


        {/* Process */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">My Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Briefing", description: "Understanding your content goals and audience" },
              { step: "02", title: "Research", description: "Keyword and competitor analysis" },
              { step: "03", title: "Writing", description: "Crafting compelling and SEO-friendly content" },
              { step: "04", title: "Delivery", description: "Final edits, approval, and publishing support" },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-blue-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What industries do you specialize in?",
                answer:
                  "I write for a wide range of industries including tech, marketing, health, SaaS, and e-commerce.",
              },
              {
                question: "Do you offer revisions?",
                answer:
                  "Yes, I include 2 rounds of revisions with each piece of content to ensure it meets your expectations.",
              },
              {
                question: "How do you handle SEO?",
                answer:
                  "I use keyword research, meta tags, internal linking, and formatting techniques to boost SEO naturally.",
              },
              {
                question: "What is your turnaround time?",
                answer:
                  "Most projects are delivered within 5–7 business days, depending on length and complexity.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
      <section className="text-center">
  <Card className="max-w-2xl mx-auto">
    <CardContent className="p-8">
      <MessageCircle className="h-12 w-12 text-blue mx-auto mb-4" />

      <h2 className="text-2xl font-bold mb-4">
        Ready to Elevate Your Content?
      </h2>

      <p className="text-muted-foreground mb-6">
        Let's discuss your content needs and bring your ideas to life with impactful writing.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" asChild>
          <a
            href="https://wa.me/923337784823?text=Hello%20Romana%2C%20I%20would%20like%20to%20discuss%20my%20content%20needs%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Free Quote
          </a>
        </Button>

        <Button size="lg" variant="outline" asChild>
          <Link href="/portfolio">View Writing Samples</Link>
        </Button>
      </div>
    </CardContent>
  </Card>
</section>
      </div>

      <Footer />
    </div>
  )
}
