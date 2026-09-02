import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Award, GraduationCap, Briefcase } from "lucide-react"
import type { Metadata } from "next"
import { DownloadResumeButton } from "@/components/DownloadResumeButton"

export const metadata: Metadata = {
  title: "About Romana Wasem - SEO Content Writer & Social Media Manager",
  description:
    "Learn about Romana Wasem, an SEO Content Writer and Social Media Manager specializing in SEO content writing, copywriting, content strategy, social media management, lead generation, and online marketing.",
  keywords: [
    "Romana Wasem",
    "SEO Content Writer",
    "Social Media Manager",
    "SEO content writing",
    "copywriting",
    "keyword research",
    "keyword analysis",
    "social media management",
    "content strategy",
    "brand building",
    "online marketing",
    "lead generation",
    "email marketing",
    "business development",
    "cold calling",
    "YouTube analytics",
    "data entry",
    "sales management",
  ],
  authors: [{ name: "Romana Wasem" }],
  openGraph: {
    title: "About Romana Wasem - SEO Content Writer & Social Media Manager",
    description:
      "Discover Romana Wasem's professional experience in SEO content writing, social media management, lead generation, marketing, and business development.",
    type: "website",
    url: "https://storycup.vercel.app/about",
    images: [
      {
        url: "/aboutme.webp",
        width: 1200,
        height: 630,
        alt: "Romana Wasem - SEO Content Writer and Social Media Manager",
      },
    ],
    siteName: "Romana Wasem Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Romana Wasem - SEO Content Writer",
    description:
      "Learn about Romana Wasem's experience in SEO content writing, social media management, marketing, and business development.",
    images: ["/aboutme.webp"],
  },
  alternates: {
    canonical: "https://storycup.vercel.app/about",
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
      "@type": "Person",
      name: "Romana Wasem",
      jobTitle: "SEO Content Writer & Social Media Manager",
      url: "https://storycup.vercel.app/about",
      description:
        "Romana Wasem is an SEO Content Writer and Social Media Manager with experience in SEO content writing, social media management, lead generation, online marketing, and business development.",
    }),
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="/about.jpeg"
              alt="Romana Wasem"
              fill
              className="rounded-full border-4 border-primary/20"
            />
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            About Me
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm Romana Wasem, an SEO Content Writer and Social Media Manager
            with professional experience in SEO content writing, copywriting,
            social media management, content strategy, lead generation, and
            online marketing.
          </p>

          <DownloadResumeButton />
        </section>

        {/* Professional Journey */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Professional Journey
          </h2>

          <div className="space-y-8">

            {/* SEO Content Writer */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>SEO Content Writer</CardTitle>
                    <p className="text-muted-foreground">
                      Zera Creative • July 2023 - Present
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Creating SEO-oriented content including blogs, web page
                  content, social media calendars, and company profiles.
                  Experienced in developing content for SEO agencies, fashion,
                  lifestyle, and other business-focused industries.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">SEO Content Writing</Badge>
                  <Badge variant="secondary">Blogs</Badge>
                  <Badge variant="secondary">Web Page Content</Badge>
                  <Badge variant="secondary">Social Media Calendars</Badge>
                  <Badge variant="secondary">Company Profiles</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Business Development Specialist */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Business Development Specialist</CardTitle>
                    <p className="text-muted-foreground">
                      Zera Creative • March 2024
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Worked on lead generation, data entry, email marketing, cold
                  marketing, and business development activities to support
                  client acquisition and business growth.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Lead Generation</Badge>
                  <Badge variant="secondary">Data Entry</Badge>
                  <Badge variant="secondary">Email Marketing</Badge>
                  <Badge variant="secondary">Cold Marketing</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Marketing Manager */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Social Media Marketing Manager</CardTitle>
                    <p className="text-muted-foreground">
                      Rafique Diamond • June 2023 - Present
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Managing social media activities including social media post
                  designing, YouTube management, social platform management,
                  and sales management.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Social Media Posts Designing</Badge>
                  <Badge variant="secondary">YouTube Management</Badge>
                  <Badge variant="secondary">Social Platforms Management</Badge>
                  <Badge variant="secondary">Sales Management</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Lead Generation Specialist */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Lead Generation Specialist</CardTitle>
                    <p className="text-muted-foreground">
                      Strategists • April 2024 - June 2024
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Focused on lead generation, data entry, email marketing,
                  cold marketing, and supporting business development
                  activities.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Lead Generation</Badge>
                  <Badge variant="secondary">Data Entry</Badge>
                  <Badge variant="secondary">Email Marketing</Badge>
                  <Badge variant="secondary">Cold Marketing</Badge>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Skills & Tools
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* SEO & Writing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  SEO & Content Writing
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>SEO Content Writing</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Copywriting</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Keyword Research</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>

              </CardContent>
            </Card>

            {/* Marketing & Social Media */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Marketing & Social Media
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Social Media Management</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Content Strategy</span>
                    <span>88%</span>
                  </div>
                  <Progress value={88} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Online Marketing</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} />
                </div>

              </CardContent>
            </Card>

            {/* Business & Digital Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Business & Digital Skills
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Lead Generation</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Email Marketing</span>
                    <span>88%</span>
                  </div>
                  <Progress value={88} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Business Development</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} />
                </div>

              </CardContent>
            </Card>

          </div>

          {/* Additional Skills */}
          <div className="flex flex-wrap gap-2 justify-center mt-8">
            <Badge variant="secondary">Keyword Analysis</Badge>
            <Badge variant="secondary">Brand Building</Badge>
            <Badge variant="secondary">Sales Management</Badge>
            <Badge variant="secondary">YouTube Analytics</Badge>
            <Badge variant="secondary">Data Entry</Badge>
            <Badge variant="secondary">Cold Calling</Badge>
            <Badge variant="secondary">Email Marketing</Badge>
            <Badge variant="secondary">Business Development</Badge>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Education & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Bachelor's */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Bachelors (Bioinformatics)</CardTitle>
                    <p className="text-muted-foreground">
                      GCUF • 2022 - Present
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Currently pursuing a Bachelor's degree in Bioinformatics at
                  GCUF.
                </p>
              </CardContent>
            </Card>

            {/* Intermediate */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Intermediate (Pre-Medical)</CardTitle>
                    <p className="text-muted-foreground">
                      NJC • 2020 - 2022
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Completed Intermediate education in the Pre-Medical group.
                </p>
              </CardContent>
            </Card>

            {/* Matriculation */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <CardTitle>Matriculation (Sciences)</CardTitle>
                    <p className="text-muted-foreground">
                      MGHS • 2018 - 2020
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  Completed Matriculation with a focus on Science subjects.
                </p>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Personal Interests */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Beyond the Page
          </h2>

          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                I enjoy creating meaningful content, exploring digital
                marketing strategies, managing social media platforms, and
                continuously improving my skills in SEO, content strategy,
                online marketing, and business development.
              </p>
            </CardContent>
          </Card>
        </section>

      </div>

      <Footer />
    </div>
  )
}