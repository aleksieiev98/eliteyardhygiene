import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bone,
  CalendarClock,
  Check,
  Dog,
  Facebook,
  Fence,
  Instagram,
  Mail,
  MapPinned,
  MessageSquareQuote,
  Music2,
  Phone,
  PictureInPicture2,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Star,
  TimerReset,
  Trees,
} from "lucide-react";
import { BeforeAfterCard } from "@/components/before-after-card";
import { QuoteForm } from "@/components/quote-form";
import { getAllPosts } from "@/data/blog-posts";

const trustPills = ["Locally Trusted", "Reliable Weekly Service", "Pet-Friendly"];

const stats = [
  { value: "4.9/5", label: "Average rating" },
  { value: "650+", label: "Happy customers" },
  { value: "9,400+", label: "Cleanups completed" },
  { value: "Licensed & Insured", label: "Protected service" },
];

const services = [
  {
    icon: CalendarClock,
    title: "Weekly pet waste removal",
    copy: "Our most popular plan for homeowners who want a consistently fresh yard with zero hassle.",
  },
  {
    icon: TimerReset,
    title: "Twice-weekly service",
    copy: "Ideal for multiple dogs, active families, and anyone who wants the cleanest possible outdoor space.",
  },
  {
    icon: Sparkles,
    title: "One-time cleanup",
    copy: "A fast reset before parties, move-ins, listings, holidays, or after a busy stretch.",
  },
  {
    icon: SprayCan,
    title: "Yard deodorizing",
    copy: "Pet-safe finishing treatment that helps your yard smell as clean as it looks.",
  },
  {
    icon: Dog,
    title: "Multi-dog yard service",
    copy: "Flexible pricing and service plans built for households with heavier yard traffic.",
  },
  {
    icon: Trees,
    title: "Spring and seasonal cleanup",
    copy: "A thorough fresh-start service to get your yard ready for outdoor season.",
  },
  {
    icon: Fence,
    title: "Commercial pet areas",
    copy: "Reliable cleanup for HOAs, apartment communities, and dog relief stations.",
  },
];

const pricing = [
  {
    title: "One-Time Cleanup",
    price: "$79",
    note: "starting",
    description: "Deep cleanup for overgrown yards or event prep.",
    features: ["Full walkthrough and pickup", "Bagged disposal included", "Perfect for resets"],
  },
  {
    title: "Weekly Service",
    price: "$65",
    note: "per week",
    description: "The easy way to keep your yard fresh all season long.",
    features: ["Scheduled weekly visit", "Visit notifications", "Most popular recurring plan"],
    featured: true,
  },
  {
    title: "Twice Weekly",
    price: "$98",
    note: "per week",
    description: "Built for multi-dog homes and high-use backyards.",
    features: ["Two visits each week", "Cleaner yard between visits", "Best for busy households"],
  },
];

const benefits = [
  "Reliable arrival windows and consistent routes",
  "Tools sanitized between every property visit",
  "Gates secured after each cleanup",
  "Friendly, dog-comfortable technicians",
  "Simple quote-first booking process",
  "Satisfaction guarantee on every visit",
  "Text or email notifications when service is complete",
  "Locally owned, family-style customer care",
];

const testimonials = [
  {
    name: "Melissa R.",
    area: "Oak Ridge",
    quote:
      "The yard looks immaculate every single week. They lock the gate, text when they're done, and make the whole thing effortless.",
  },
  {
    name: "James T.",
    area: "Willow Creek",
    quote:
      "We have three dogs and two kids, so this service is a lifesaver. Elite Yard Hygiene is reliable, polite, and incredibly thorough.",
  },
  {
    name: "Ariana P.",
    area: "Maple Heights",
    quote:
      "Booked a one-time cleanup before hosting friends and it completely changed the yard. It felt like a luxury service from start to finish.",
  },
];

const faqs = [
  {
    question: "How often should my yard be cleaned?",
    answer:
      "Most homes do best with weekly service. Yards with multiple dogs or smaller play areas often benefit from twice-weekly visits.",
  },
  {
    question: "Do I need to be home during service?",
    answer:
      "No. As long as we have access to your gate, we can complete the visit and send a text or email confirmation when we're done.",
  },
  {
    question: "What happens if it rains?",
    answer:
      "We work in light rain whenever conditions are safe. If weather prevents a quality cleanup, we reschedule the visit promptly.",
  },
  {
    question: "Do you clean with dogs in the yard?",
    answer:
      "Friendly dogs are usually fine. If a pet is anxious or protective, we may ask that they stay inside for everyone's comfort.",
  },
  {
    question: "How do billing and scheduling work?",
    answer:
      "We start with a free quote, confirm your route day, and keep your service cadence consistent with visit notifications after each cleanup.",
  },
  {
    question: "Do you offer one-time cleanups?",
    answer:
      "Yes. One-time cleanups are popular before events, after travel, during seasonal transitions, or when restarting yard service.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve families across Brookhaven, Cedar Park, Willow Creek, Maple Heights, and nearby neighborhoods throughout the local metro.",
  },
  {
    question: "Do you disinfect tools between visits?",
    answer:
      "Yes. We sanitize tools and footwear between properties to help protect your pets and keep our process clean and responsible.",
  },
];

const areas = [
  "Brookhaven",
  "Cedar Park",
  "Willow Creek",
  "Maple Heights",
  "Oak Ridge",
  "Riverstone",
];

const carouselPhotos = [
  {
    src: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1200&q=80",
    alt: "Dog relaxing in a freshly cleaned yard",
    label: "Fresh yard, happy dog",
  },
  {
    src: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80",
    alt: "Bright green backyard after cleanup",
    label: "Weekend-ready backyard",
  },
  {
    src: "https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&w=1200&q=80",
    alt: "Homeowner enjoying time outside with dog",
    label: "Peace of mind outside",
  },
  {
    src: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&q=80",
    alt: "Dog running across a clean lawn",
    label: "Ready for zoomies",
  },
];

const recentPosts = getAllPosts().slice(0, 3);

export default function HomePage() {
  return (
    <main>
      <section className="hero-section" id="top">
        <div className="container hero-grid">
          <div className="hero-copy" data-reveal>
            <span className="eyebrow">Local Yard Cleanup Service</span>
            <h1>
              A cleaner yard, a happier dog, and one less thing on your list.
            </h1>
            <p className="hero-text">
              Elite Yard Hygiene delivers recurring and one-time pet waste removal
              for busy homeowners who want a yard that feels fresh, safe, and ready
              to enjoy.
            </p>
            <div className="cta-row">
              <Link href="#quote" className="button button-primary">
                Get a Free Quote
              </Link>
              <Link href="#pricing" className="button button-secondary">
                View Pricing
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="hero-proof-stack">
              <div className="pill-row">
                {trustPills.map((pill) => (
                  <span key={pill} className="trust-pill">
                    <BadgeCheck size={16} />
                    {pill}
                  </span>
                ))}
              </div>
              <div className="micro-proof">
                <span>
                  <Star size={16} fill="currentColor" />
                  Trusted by local dog owners
                </span>
                <span>Launch offer: first customers save 25%</span>
                <span>Text alerts after every visit</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="hero-badge">Locally trusted yard cleanup</div>
            <div className="hero-card">
              <div className="hero-image-wrap">
                <Image
                  src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80"
                  alt="Happy dog in a clean backyard"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="hero-image"
                />
              </div>
              <div className="hero-card-footer">
                <div>
                  <strong>Fresh yard feeling</strong>
                  <p>Reliable scooping, deodorizing, and secure gate checks.</p>
                </div>
                <div className="mini-stat">
                  <span>650+</span>
                  <small>local customers served</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container trust-bar-inner" data-reveal>
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
          <div className="review-logos">
            <span>Google</span>
            <span>Facebook</span>
            <span>Yelp</span>
          </div>
        </div>
      </section>

      <section className="section promo-section">
        <div className="container">
          <div className="promo-card" data-reveal>
            <div className="promo-copy">
              <span className="eyebrow">Launch Promotion</span>
              <h2>We’re officially going live, and our first customers get 25% off.</h2>
              <p>
                To celebrate launching Elite Yard Hygiene for the first time, we’re
                giving early customers a <strong>25% discount</strong> on their first
                service. It’s the easiest time to lock in a cleaner yard and try us
                out with less risk.
              </p>
            </div>
            <div className="promo-actions">
              <div className="promo-badge">
                <strong>-25%</strong>
                <span>for first customers</span>
              </div>
              <Link href="#quote" className="button button-primary">
                Claim the Launch Offer
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section gallery-section" id="gallery">
        <div className="container">
          <div className="section-heading" data-reveal>
            <span className="eyebrow">Before & After</span>
            <h2>The transformation is the point.</h2>
            <p>
              See how fast a messy, avoided yard turns into a clean outdoor space
              your family actually wants to use again.
            </p>
          </div>
          <div className="comparison-grid">
            <BeforeAfterCard
              before="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
              after="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
              title="Weekend reset for a family backyard"
              description="One-time cleanup plus deodorizing to get this yard party-ready in a single visit."
            />
            <BeforeAfterCard
              before="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80"
              after="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
              title="Multi-dog yard on a weekly plan"
              description="Consistent recurring service keeps high-traffic grass areas cleaner, fresher, and easier to enjoy."
            />
            <BeforeAfterCard
              before="https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=80"
              after="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80"
              title="Seasonal cleanup before spring"
              description="A full-property scoop and refresh to make the yard feel clean and welcoming again."
            />
          </div>
          <div className="section-cta" data-reveal>
            <Link href="#quote" className="button button-primary">
              Get Your Yard Looking Like This
            </Link>
          </div>
        </div>
      </section>

      <section className="section carousel-section">
        <div className="container">
          <div className="section-heading" data-reveal>
            <span className="eyebrow">Photo Highlights</span>
            <h2>A clean yard should look this inviting all week long.</h2>
            <p>
              Scroll through a few moments that capture the feeling customers are
              really buying: a yard that looks polished, smells fresher, and feels
              easy to enjoy again.
            </p>
          </div>
          <div className="photo-carousel" data-reveal>
            {carouselPhotos.map((photo) => (
              <article key={photo.label} className="photo-slide">
                <div className="photo-slide-image">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 82vw, 32vw"
                    className="comparison-image"
                  />
                </div>
                <div className="photo-slide-copy">
                  <PictureInPicture2 size={18} />
                  <span>{photo.label}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading" data-reveal>
            <span className="eyebrow">Services</span>
            <h2>Flexible cleanup plans for real homes and real schedules.</h2>
            <p>
              Whether you want a simple weekly route or a one-time yard reset, we
              make it easy to choose the right level of help.
            </p>
          </div>
          <div className="services-grid">
            {services.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="service-card" data-reveal>
                <div className="icon-wrap">
                  <Icon size={24} />
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
                <Link href="#quote" className="inline-link">
                  Request this service
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container">
          <div className="section-heading" data-reveal>
            <span className="eyebrow">How It Works</span>
            <h2>Simple, sanitary, and easy to trust.</h2>
          </div>
          <div className="steps-grid">
            {[
              {
                title: "Choose your service",
                text: "Tell us about your yard, your dogs, and whether you want recurring or one-time cleanup.",
              },
              {
                title: "We clean and sanitize",
                text: "Our team scoops thoroughly, secures the area, and sanitizes tools between every property.",
              },
              {
                title: "Enjoy a fresh, clean yard",
                text: "You get visit notifications, easy online billing, and a yard that feels good to step into.",
              },
            ].map((step, index) => (
              <article key={step.title} className="step-card" data-reveal>
                <span className="step-index">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="container">
          <div className="section-heading" data-reveal>
            <span className="eyebrow">Pricing</span>
            <h2>Clear starting prices with no guesswork.</h2>
            <p>
              Final pricing depends on yard size, number of dogs, and service
              frequency, but these packages give a clear starting point.
            </p>
          </div>
          <div className="pricing-grid">
            {pricing.map((tier) => (
              <article
                key={tier.title}
                className={`pricing-card ${tier.featured ? "featured" : ""}`}
                data-reveal
              >
                <div className="pricing-card-top">
                  <div className="pricing-badge-row">
                    {tier.featured ? (
                      <span className="pricing-badge">Most Popular</span>
                    ) : (
                      <span className="pricing-badge pricing-badge-placeholder" aria-hidden="true" />
                    )}
                  </div>
                  <h3>{tier.title}</h3>
                  <div className="price-line">
                    <strong>{tier.price}</strong>
                    <span>{tier.note}</span>
                  </div>
                </div>
                <p>{tier.description}</p>
                <ul>
                  {tier.features.map((feature) => (
                    <li key={feature}>
                      <Check size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="#quote" className="button button-primary button-full">
                  Get a Free Quote
                </Link>
              </article>
            ))}
          </div>
          <div className="addons-card" data-reveal>
            <div>
              <h3>Optional add-ons</h3>
              <p>
                Multi-dog add-on from <strong>$12/week</strong>. Pet-safe
                deodorizing from <strong>$18/visit</strong>.
              </p>
            </div>
            <Link href="#quote" className="button button-secondary">
              Ask About Add-Ons
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-panel">
          <div className="panel-copy" data-reveal>
            <span className="eyebrow">Why Choose Us</span>
            <h2>Premium service details homeowners actually notice.</h2>
            <div className="benefits-grid">
              {benefits.map((benefit) => (
                <div key={benefit} className="benefit-item">
                  <ShieldCheck size={18} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="panel-card" data-reveal>
            <div className="panel-stat">
              <Bone size={20} />
              <div>
                <strong>Fresh, safe, dog-ready yards</strong>
                <p>Careful process, premium communication, and consistent routes.</p>
              </div>
            </div>
            <div className="panel-stat">
              <Check size={20} />
              <div>
                <strong>Simple quote-first booking</strong>
                <p>Start with a free quote, then we confirm the best service plan for your yard.</p>
              </div>
            </div>
            <div className="panel-stat">
              <MessageSquareQuote size={20} />
              <div>
                <strong>Customer-first communication</strong>
                <p>Fast responses, clean notifications, and no chasing down updates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container">
          <div className="section-heading" data-reveal>
            <span className="eyebrow">Testimonials</span>
            <h2>Trusted by busy local dog owners.</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="testimonial-card" data-reveal>
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>
                <p>&ldquo;{testimonial.quote}&rdquo;</p>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.area}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container split-panel">
          <div className="panel-copy" data-reveal>
            <span className="eyebrow">FAQ</span>
            <h2>Questions homeowners ask before getting started.</h2>
            <p>
              Clear answers help customers feel confident fast, especially when
              they are comparing local service providers.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question} className="faq-item" data-reveal>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section service-area-section">
        <div className="container split-panel">
          <div className="panel-copy" data-reveal>
            <span className="eyebrow">Service Area</span>
            <h2>Local coverage built for neighborhood-level trust.</h2>
            <p>
              Elite Yard Hygiene proudly serves homeowners across Brookhaven,
              Cedar Park, Willow Creek, Maple Heights, Oak Ridge, Riverstone,
              and nearby communities. If you are just outside our core route,
              send a quote request and we may still be able to help.
            </p>
            <div className="area-tags">
              {areas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>
          <div className="map-card" data-reveal>
            <div className="map-placeholder">
              <MapPinned size={28} />
              <strong>Coverage map placeholder</strong>
              <p>Swap this panel for an embedded Google Map when the business listing is ready.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section blog-preview-section">
        <div className="container">
          <div className="blog-list-header" data-reveal>
            <div>
              <span className="eyebrow">From The Blog</span>
              <h2>Search-friendly answers to the questions local dog owners already ask.</h2>
            </div>
            <Link href="/blog" className="button button-secondary">
              Visit the Blog
            </Link>
          </div>
          <div className="blog-grid">
            {recentPosts.map((post) => (
              <article key={post.slug} className="blog-card" data-reveal>
                <div className="blog-meta">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div className="keyword-row">
                  {post.keywords.slice(0, 2).map((keyword) => (
                    <span key={keyword}>{keyword}</span>
                  ))}
                </div>
                <div className="blog-card-footer">
                  <Link href={`/blog/${post.slug}`} className="inline-link">
                    Read article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta-section" id="quote">
        <div className="container final-cta-grid">
          <div className="panel-copy" data-reveal>
            <span className="eyebrow">Take Back Your Yard</span>
            <h2>Get your free quote today and let your backyard feel good again.</h2>
            <p>
              Whether you need a weekly route or a one-time cleanup, we make it
              simple to start. Reach out today and we will recommend the best plan
              for your yard size, pets, and schedule.
            </p>
            <div className="contact-list">
              <a href="tel:5555550145">
                <Phone size={18} />
                (555) 555-0145
              </a>
              <a href="mailto:hello@eliteyardhygiene.com">
                <Mail size={18} />
                hello@eliteyardhygiene.com
              </a>
            </div>
          </div>
          <div className="form-shell" data-reveal>
            <QuoteForm />
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h3>Elite Yard Hygiene</h3>
            <p>
              Premium pet waste removal for homeowners who want a cleaner yard and
              more peace of mind.
            </p>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="tel:5555550145">(555) 555-0145</a>
            <a href="mailto:hello@eliteyardhygiene.com">
              hello@eliteyardhygiene.com
            </a>
            <p>Mon-Fri 8am-6pm</p>
          </div>
          <div>
            <h4>Service Area</h4>
            <p>Brookhaven, Cedar Park, Willow Creek, Maple Heights, and nearby neighborhoods.</p>
          </div>
          <div>
            <h4>Follow</h4>
            <div className="socials">
              <a href="https://facebook.com" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://tiktok.com" aria-label="TikTok">
                <Music2 size={18} />
              </a>
              <a href="https://business.google.com" aria-label="Google Business Profile">
                <Star size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 Elite Yard Hygiene. All rights reserved.</p>
          <div className="footer-links">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
