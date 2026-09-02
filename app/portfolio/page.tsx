import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExternalLink} from "lucide-react"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "  Romana Wasem's Portfolio - SEO Content & Copywriting",
  description:
    "Explore   Romana Wasem's content writing portfolio, featuring SEO content, blog posts, and copywriting projects for businesses.",
  keywords: [
  "  Romana Wasemportfolio",
  "content writing portfolio",
  "best content writing services",
  "content writing services in Pakistan",
  "article writing services in Pakistan",
  "best SEO content writer in Pakistan",
  "freelance content writer",
  "SEO copywriting",
  "blog writing portfolio",
  "professional content writing services",
  "content writer Karachi",
  "content writing in Dubai",
  "best copywriter in USA",
  "freelance copywriter Australia",
  "real estate content writer",
  "marketing content writer",
  "web content writer",
  "best content writing websites",
  "content writer rates per word",
  "content writer Karachi contact number",
],
  authors: [{ name: "  Romana Wasem" }],
  openGraph: {
    title: "  Romana Wasem's Portfolio - Content Writing & SEO",
    description:
      "View   Romana Wasem's professional portfolio of SEO content, blog posts, and persuasive copywriting for brands and businesses.",
    type: "website",
    url: "https://storycup.vercel.app/portfolio", // Replace with your actual Portfolio page URL
    images: [
      {
        url: "/worldwideartical.jpg", // Replace with a relevant image for the Portfolio page
        width: 1200,
        height: 630,
        alt: "  Romana WasemContent Writing Portfolio",
      },
    ],
    siteName: "  Romana WasemPortfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "  Romana Wasem's Portfolio - Content Writing & SEO",
    description:
      "Discover   Romana Wasem's portfolio showcasing SEO content, blog writing, and copywriting projects.",
    images: ["/worldwideartical.jpg"], // Replace with your actual image
  },
  alternates: {
    canonical: "https://storycup.vercel.app/portfolio", // Replace with your actual Portfolio page URL
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
      name: "  Romana Wasem's Content Writing Portfolio",
      author: {
        "@type": "Person",
        name: "  Romana Wasem",
      },
      url: "https://storycup.vercel.app/portfolio", // Replace with your actual Portfolio page URL
      sameAs: [
        "https://www.linkedin.com/in/  Romana Wasem", // Replace with your actual LinkedIn
        "https://twitter.com/  Romana Wasem", // Replace with your actual Twitter
      ],
      description:
        "  Romana Wasem's portfolio showcases professional content writing, including SEO content, blog posts, and copywriting for businesses and brands.",
    }),
  },
};

const projects = [
  {
    id: 1,
    title: "8 Tips to Master User Intent",
    description:
      "A comprehensive article on the future of AI in business, published on Al-Innovation.",
    image: "/Al-Innovation-Article.webp?height=300&width=500",
    category: "Articles",
    technologies: ["SEO", "Blog Writing", "Content Strategy"],
    liveUrl: "	https://drive.google.com/drive/u/2/folders/1L83L1fW7GBF8xo0YTckgMA4tEGQKCJyt",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "10 Best Leather Jacket Brands To Know",
    description:
      "A detailed biography script for a YouTube channel, highlighting the life and achievements of a notable figure.",
    image: "/bBiography.webp?height=300&width=500",
    category: "Scripts",
    technologies: ["YouTube", "Scripting", "Tech Writing"],
    liveUrl: "https://drive.google.com/drive/u/2/folders/1L83L1fW7GBF8xo0YTckgMA4tEGQKCJyt",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "How SEO Can Help You Build a Strong Brand Identity",
    description:
      "Developed a personal branding campaign for a cryptocurrency founder, including LinkedIn posts and articles.",
    image: "/Cryptocurrency.webp?height=300&width=500",
    category: "Campaigns",
    technologies: ["Personal Branding", "Storytelling", "LinkedIn"],
    liveUrl: "https://drive.google.com/drive/u/2/folders/1L83L1fW7GBF8xo0YTckgMA4tEGQKCJyt",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Brother Entrepreneur Pro PR1000e Review",
    description:
      "Created comprehensive documentation for a digital marketing platform, including user guides and FAQs.",
    image: "/Digital Marketing.webp?height=300&width=500",
    category: "Documentation",
    technologies: ["Technical Writing", "Markdown", "Help Center"],
    liveUrl: "https://drive.google.com/drive/u/2/folders/1L83L1fW7GBF8xo0YTckgMA4tEGQKCJyt",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "How Voice Mail Service Providers Improve Communication ",
    description:
      "An informative article on the impact of social media on modern communication, focusing on trends and statistics.",
    image: "/Informative-Article.webp?height=300&width=500",
    category: "Articles",
    technologies: ["Email Marketing", "Copywriting", "Campaign Design"],
    liveUrl: "https://drive.google.com/drive/u/2/folders/1L83L1fW7GBF8xo0YTckgMA4tEGQKCJyt",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Lost Filling: Here's Why to Have an Emergency Dentist ASAP",
    description:
      "A blog post discussing the latest trends in personal finance, including budgeting and investment tips.",
    image: "/finance.webp?height=300&width=500",
    category: "Documentation",
    technologies: ["Open Source", "Markdown", "Technical Writing"],
    liveUrl: "https://drive.google.com/drive/u/2/folders/1L83L1fW7GBF8xo0YTckgMA4tEGQKCJyt",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 7,
    title: "Swift Receptionist Support for Healthcare Communication Needs",
    description:
      "An article exploring various online earning opportunities, from freelancing to affiliate marketing.",
    image: "/Online Earning-Article.webp?height=300&width=500",
    category: "Articles",
    technologies: ["Open Source", "Markdown", "Technical Writing"],
    liveUrl: "https://drive.google.com/drive/u/2/folders/1L83L1fW7GBF8xo0YTckgMA4tEGQKCJyt",
    githubUrl: "#",
    featured: false,
  },
]

export default function PortfolioPage() {
  const categories = ["All", "Articles", "Scripts", "Campaigns", "Documentation"]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">My Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of writing projects that reflect my work across content strategy, blogs, campaigns, and scripts.
          </p>
        </section>

        {/* Project Categories */}
        <Tabs defaultValue="All" className="mb-12">
          <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => category === "All" || project.category === category)
                  .map((project) => (
                    <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        {project.featured && <Badge className="absolute top-4 left-4">Featured</Badge>}
                      </div>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">{project.category}</Badge>
                        </div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" asChild>
                            <Link href={project.liveUrl} target="_blank">
                              <ExternalLink className="mr-2 h-3 w-3" />
                              Live Demo
                            </Link>
                          </Button>
                          {/* <Button size="sm" variant="outline" asChild>
                            <Link href={project.githubUrl} target="_blank">
                              <Youtube className="mr-2 h-3 w-3 text-red-600" />
                              Video
                            </Link>
                          </Button> */}
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
              <h2 className="text-2xl font-bold mb-4">Interested in Working Together?</h2>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new opportunities and meaningful content projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get In Touch</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">View Services</Link>
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
