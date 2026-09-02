import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExternalLink } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Romana Wasem's Portfolio - SEO Content & Copywriting",
  description:
    "Explore Romana Wasem's professional portfolio featuring SEO blogs, copywriting, and company profile content.",
  keywords: [
    "Romana Wasem portfolio",
    "SEO content writer portfolio",
    "SEO content writing",
    "blog writing portfolio",
    "copywriting portfolio",
    "company profile writing",
    "SEO blogs",
    "content writing",
    "copywriting",
    "keyword research",
    "content strategy",
    "professional content writer",
    "social media content",
    "online marketing",
    "content writer Pakistan",
  ],
  authors: [{ name: "Romana Wasem" }],
  openGraph: {
    title: "Romana Wasem's Portfolio - Content Writing & SEO",
    description:
      "View Romana Wasem's professional portfolio of SEO blogs, copywriting, and company profile writing.",
    type: "website",
    url: "https://storycup.vercel.app/portfolio",
    images: [
      {
        url: "/worldwideartical.jpg",
        width: 1200,
        height: 630,
        alt: "Romana Wasem Content Writing Portfolio",
      },
    ],
    siteName: "Romana Wasem Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Romana Wasem's Portfolio - Content Writing & SEO",
    description:
      "Discover Romana Wasem's portfolio showcasing SEO blogs, copywriting, and company profile content.",
    images: ["/worldwideartical.jpg"],
  },
  alternates: {
    canonical: "https://storycup.vercel.app/portfolio",
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
      "@type": "CreativeWork",
      name: "Romana Wasem's Content Writing Portfolio",
      author: {
        "@type": "Person",
        name: "Romana Wasem",
      },
      url: "https://storycup.vercel.app/portfolio",
      description:
        "Romana Wasem's portfolio showcases professional SEO content writing, blogs, copywriting, and company profile content.",
    }),
  },
}

const DRIVE_URL =
  "https://drive.google.com/drive/u/2/folders/1L83L1fW7GBF8xo0YTckgMA4tEGQKCJyt"

const projects = [
  {
    id: 1,
    title: "8 Tips to Master User Intent",
    description:
      "An SEO-focused blog discussing user intent and practical strategies for creating content that matches search intent.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
    category: "Blogs",
    technologies: ["SEO", "Blog Writing", "Keyword Research"],
    liveUrl:
      "https://docs.google.com/document/d/1ietW-LICUaPLUtW4AZ8tLwZhbac1-qfp6DPPOBUlhDs/edit?usp=drivesdk",
    featured: true,
  },

  {
    id: 2,
    title: "10 Best Leather Jacket Brands To Know",
    description:
      "A detailed SEO blog focused on leather jacket brands, written with engaging content and search-friendly structure.",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    category: "Blogs",
    technologies: ["SEO Writing", "Blog Writing", "Content Strategy"],
    liveUrl:
      "https://docs.google.com/document/d/1MvOWk8Utc6s-USu40xua7k592DE88dObJ7rrJspWok8/edit?usp=drivesdk",
    featured: true,
  },

  {
    id: 3,
    title: "How SEO Can Help You Build a Strong Brand Identity",
    description:
      "An informative SEO-focused piece explaining how search engine optimization can support brand identity and online visibility.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    category: "Blogs",
    technologies: ["SEO", "Copywriting", "Brand Building"],
    liveUrl:
      "https://docs.google.com/document/d/1Ia8kWCVpD0jKlF-g6KjEHZCIuEQqUdtROFY5nENRsh8/edit?usp=drivesdk",
    featured: true,
  },

  {
  id: 4,
  title: "Brother Entrepreneur Pro PR1000e Review",
  description:
    "A detailed product-focused piece created to provide useful information while maintaining an engaging and SEO-friendly writing style.",
  image:
    "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80",
  category: "Blogs",
  technologies: ["Copywriting", "SEO Content", "Product Content"],
  liveUrl:
    "https://docs.google.com/document/d/1Fi0o5MZOM3yf0d6iSAdx60To9VF3KdmHJifsb83vNdY/edit?usp=drivesdk",
  featured: false,
},

  {
    id: 5,
    title: "How Voice Mail Service Providers Improve Communication",
    description:
      "An informative content piece discussing communication services and how businesses can improve communication through voicemail solutions.",
    image:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=80",
    category: "Blogs",
    technologies: ["SEO Writing", "Research", "Content Writing"],
    liveUrl:
      "https://docs.google.com/document/d/1qzJR_wS9VJ2eMVA3tW1tBchoDde0occPj2C9jgo3dik/edit?usp=drivesdk",
    featured: false,
  },

  {
    id: 6,
    title: "Lost Filling? Here's Why to Have an Emergency Dentist ASAP",
    description:
      "A healthcare-focused SEO blog explaining the importance of taking quick action after losing a dental filling.",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80",
    category: "Blogs",
    technologies: ["SEO", "Blog Writing", "Healthcare Content"],
    liveUrl:
      "https://docs.google.com/document/d/1EfjHVc07MFj5DXCak-4Bfp2gxNBvaqKSyNxe0PaClaA/edit?usp=drivesdk",
    featured: false,
  },

  {
    id: 7,
    title: "Swift Receptionist Support for Healthcare Communication Needs",
    description:
      "A professional content piece focused on healthcare communication and receptionist support services.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
    category: "Blogs",
    technologies: ["Company Content", "SEO Writing", "Business Writing"],
    liveUrl:
      "https://docs.google.com/document/d/1F8s1zrnknw8JZOYMe_OTFJqfUys0okxGZAuVEn0ahUk/edit?usp=drivesdk",
    featured: false,
  },

  {
    id: 8,
    title: "Understanding Embroidery Machine File Types: A Simple Guide",
    description:
      "An informative article explaining embroidery machine file types in a simple and easy-to-understand way.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    category: "Blogs",
    technologies: ["SEO Writing", "Blog Writing", "Research"],
    liveUrl:
      "https://docs.google.com/document/d/1XSN8TfFdtGM1BVmVRn8we8uOh1ejJNmIGF5YoV2eoWM/edit?usp=drivesdk",
    featured: false,
  },

  {
    id: 9,
    title: "10 Best Teeth Whitening services Clinic in Fort Saskatchewan",
    description:
      "A detailed SEO-focused article about teeth whitening services and clinics in Fort Saskatchewan.",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80",
    category: "Blogs",
    technologies: ["SEO", "Blog Writing", "Healthcare Content"],
    liveUrl:
      "https://docs.google.com/document/d/18NqH1wIGWwZ5o5UpHNo7gBZz9RSKywsscRGD7oEk0P8/edit?usp=drivesdk",
    featured: false,
  },
];

export default function PortfolioPage() {
  const categories = [
    "All",
    "Blogs",
    "Copywriting",
    "Company Profiles",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            My Portfolio
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of my professional writing work including SEO blogs,
            copywriting, and company profile content created for businesses
            and brands.
          </p>
        </section>

        {/* Project Categories */}
        <Tabs defaultValue="All" className="mb-12">

          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">

            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
              >
                {category}
              </TabsTrigger>
            ))}

          </TabsList>

          {categories.map((category) => (
            <TabsContent
              key={category}
              value={category}
            >

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {projects
                  .filter(
                    (project) =>
                      category === "All" ||
                      project.category === category
                  )
                  .map((project) => (

                    <Card
                      key={project.id}
                      className="overflow-hidden hover:shadow-lg transition-shadow"
                    >

                      <div className="relative h-48">

                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />

                        {project.featured && (
                          <Badge className="absolute top-4 left-4">
                            Featured
                          </Badge>
                        )}

                      </div>

                      <CardHeader>

                        <div className="flex items-center justify-between">

                          <Badge variant="secondary">
                            {project.category}
                          </Badge>

                        </div>

                        <CardTitle className="text-xl">
                          {project.title}
                        </CardTitle>

                      </CardHeader>

                      <CardContent>

                        <p className="text-muted-foreground mb-4">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">

                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}

                        </div>

                        <div className="flex gap-2">

                          <Button
                            size="sm"
                            asChild
                          >
                            <Link
                              href={project.liveUrl}
                              target="_blank"
                            >
                              <ExternalLink className="mr-2 h-3 w-3" />
                              View Work
                            </Link>
                          </Button>

                        </div>

                      </CardContent>

                    </Card>

                  ))}

              </div>

            </TabsContent>
          ))}

        </Tabs>

        {/* Call to Action */}
        <section className="text-center py-16">

          <Card className="max-w-2xl mx-auto">

            <CardContent className="p-8">

              <h2 className="text-2xl font-bold mb-4">
                Interested in Working Together?
              </h2>

              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new opportunities and meaningful
                content projects.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">

                <Button
                  size="lg"
                  asChild
                >
                  <Link href="/contact">
                    Get In Touch
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                >
                  <Link href="/services">
                    View Services
                  </Link>
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