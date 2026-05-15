import { db } from "@/lib/db";

async function seed() {
  // Seed blog posts
  const posts = [
    {
      title: "Best WordPress Cache Plugins (SEO-Focused Guide)",
      slug: "best-wordpress-cache-plugins",
      excerpt:
        "Caching is the fastest way to reduce load time and improve Core Web Vitals scores. Discover which WordPress cache plugins deliver the best SEO results.",
      content: `## Why Cache Plugins Matter for SEO

Page speed is a confirmed Google ranking factor, and caching is the single most impactful optimization you can make. A good cache plugin reduces server response time (TTFB), improves Core Web Vitals, and delivers a faster experience to your visitors.

### Top WordPress Cache Plugins for SEO

#### 1. WP Rocket
WP Rocket is widely regarded as the best premium caching plugin. It offers page caching, cache preloading, GZIP compression, lazy loading, and minification/concatenation of CSS & JS — all without touching a single line of code.

#### 2. LiteSpeed Cache
If your hosting uses LiteSpeed servers, this plugin is a powerhouse. It offers server-level caching, CDN integration, image optimization, and CSS/JS optimization — all for free.

#### 3. WP Super Cache
A free, lightweight option from Automattic. It generates static HTML files from your dynamic WordPress blog, serving them to most of your visitors without running PHP.

#### 4. W3 Total Cache
A comprehensive free plugin with page cache, browser cache, object cache, database cache, and minify features. Best suited for users comfortable with technical configurations.

#### 5. FlyingPress
A newer plugin built specifically for Core Web Vitals optimization. It includes critical CSS generation, font optimization, and JavaScript deferral — all focused on SEO performance.

### Key Features to Look For
- **Page caching** for instant load times
- **Browser caching** for returning visitors
- **GZIP compression** for smaller file sizes
- **Lazy loading** for images and iframes
- **Minification** of CSS and JavaScript
- **CDN integration** for global delivery

### Final Recommendation
For most users, **WP Rocket** provides the best balance of performance and ease of use. If you're on LiteSpeed hosting, **LiteSpeed Cache** is unbeatable. For budget-conscious users, **WP Super Cache** gets the job done.`,
      category: "Technical SEO",
      image:
        "https://shahidmohammad.com/wp-content/uploads/2026/03/Best-WordPress-Cache-Plugins-300x169.jpg",
    },
    {
      title: "How to Speed Up a WordPress Website (Complete Guide)",
      slug: "how-to-speed-up-wordpress-website",
      excerpt:
        "Website speed is not a single tweak—it's a system. If you want faster load times, better rankings, and happier visitors, here's everything you need to do.",
      content: `## The Complete WordPress Speed Optimization Guide

Website speed directly impacts your SEO rankings, user experience, and conversion rates. Google's Core Web Vitals are now a ranking factor, making speed optimization more critical than ever.

### Step 1: Choose the Right Hosting
Your hosting provider is the foundation of your site's speed. Shared hosting may be affordable, but it often leads to slow TTFB. Consider managed WordPress hosting or VPS solutions for better performance.

### Step 2: Use a Lightweight Theme
Heavy themes with excessive features slow down your site. Choose a lightweight theme like GeneratePress, Astra, or Kadence that prioritizes performance.

### Step 3: Implement Caching
Install a caching plugin like WP Rocket or LiteSpeed Cache. Caching generates static HTML versions of your pages, eliminating the need for PHP processing on every visit.

### Step 4: Optimize Images
- Use WebP format instead of JPEG/PNG
- Compress images with tools like ShortPixel or Imagify
- Implement lazy loading for below-the-fold images
- Specify image dimensions to prevent layout shifts

### Step 5: Minify CSS & JavaScript
Remove unnecessary whitespace, comments, and formatting from your CSS and JS files. Most caching plugins include this feature.

### Step 6: Use a CDN
A Content Delivery Network (CDN) like Cloudflare serves your content from servers closest to your visitors, reducing latency dramatically.

### Step 7: Reduce Server Response Time (TTFB)
- Use PHP 8.1 or higher
- Enable GZIP compression
- Use object caching (Redis or Memcached)
- Optimize your database

### Step 8: Eliminate Render-Blocking Resources
Defer non-critical JavaScript, inline critical CSS, and preload important resources to improve First Contentful Paint (FCP).

### Measuring Your Results
Use Google PageSpeed Insights, GTmetrix, and Lighthouse to track your improvements. Focus on Core Web Vitals metrics: LCP, FID/INP, and CLS.`,
      category: "Technical SEO",
      image:
        "https://shahidmohammad.com/wp-content/uploads/2026/03/How-to-Speed-Up-a-WordPress-Website-300x169.jpg",
    },
    {
      title: "How to Reduce Server Response Time (TTFB)",
      slug: "how-to-reduce-server-response-time-ttfb",
      excerpt:
        "Time to First Byte (TTFB) measures how long it takes for your server to respond. A slow TTFB kills your Core Web Vitals and search rankings.",
      content: `## Understanding TTFB and Why It Matters

Time to First Byte (TTFB) is the time it takes for a browser to receive the first byte of data from your server after making a request. Google recommends a TTFB under 200ms for optimal performance.

### What Causes High TTFB?

1. **Slow DNS resolution** - DNS lookup adds latency
2. **Network latency** - Distance between user and server
3. **Slow server processing** - PHP execution, database queries
4. **No caching** - Every request hits the server
5. **Unoptimized database** - Slow queries block responses

### How to Reduce TTFB

#### 1. Upgrade Your Hosting
The single biggest impact on TTFB is your hosting. Consider:
- **Managed WordPress hosting** (Kinsta, WP Engine, Cloudways)
- **VPS or dedicated servers** for more resources
- **Cloud hosting** (AWS, Google Cloud) for scalability

#### 2. Use a CDN with Edge Caching
Cloudflare, Fastly, and other CDNs can serve cached content from edge servers, bypassing your origin server entirely for most requests.

#### 3. Enable Page Caching
Page caching serves pre-generated HTML without running PHP. This can reduce TTFB from seconds to milliseconds.

#### 4. Optimize PHP
- Upgrade to PHP 8.1+ for significant performance gains
- Increase PHP memory limits appropriately
- Use OPcache for bytecode caching

#### 5. Database Optimization
- Clean up post revisions and spam comments
- Use indexing for frequently queried tables
- Implement object caching with Redis or Memcached
- Optimize WordPress database tables regularly

#### 6. Use HTTP/2 or HTTP/3
Newer protocols reduce connection overhead and enable multiplexing, improving initial connection speed.

#### 7. Implement Server-Level Caching
- **Nginx FastCGI cache** for Nginx servers
- **LiteSpeed cache** for LiteSpeed servers
- **Varnish cache** for reverse proxy caching

### Measuring TTFB
- Use **WebPageTest.org** for detailed waterfall analysis
- Check **Chrome DevTools Network tab** for real user data
- Monitor with **New Relic** or **Query Monitor** plugin

### Target TTFB Benchmarks
- **Under 100ms**: Excellent
- **100-200ms**: Good
- **200-500ms**: Needs improvement
- **Over 500ms**: Critical - immediate action required`,
      category: "Technical SEO",
      image:
        "https://shahidmohammad.com/wp-content/uploads/2026/03/How-to-Reduce-Server-Response-Time--300x169.jpg",
    },
    {
      title: "Local SEO in 2025: The Complete Guide for Service Businesses",
      slug: "local-seo-complete-guide-service-businesses",
      excerpt:
        "Local SEO is the most cost-effective way for service businesses to attract nearby customers. Here's your complete strategy for dominating local search results.",
      content: `## Why Local SEO Matters More Than Ever

In 2025, 46% of all Google searches are seeking local information, and 88% of consumers who do a local search on their smartphone visit or call a store within a day. If your service business isn't optimized for local search, you're leaving money on the table.

### The Core Pillars of Local SEO

#### 1. Google Business Profile Optimization
Your GBP is the foundation of local SEO. Make sure you:
- Complete every section of your profile
- Use your primary keyword in the business description
- Add high-quality photos regularly
- Post weekly updates and offers
- Respond to every review within 24 hours

#### 2. Local Keyword Research
Identify the terms your local customers are actually searching for:
- "[Service] + [City]" (e.g., "plumber in Chattogram")
- "Best [Service] near me"
- "[Service] + [Neighborhood]"
- Emergency + [Service] keywords

#### 3. On-Page Local SEO
- Include city/region in title tags and meta descriptions
- Create location-specific service pages
- Embed a Google Map on your contact page
- Add local business schema markup
- Include NAP (Name, Address, Phone) consistently

#### 4. Local Link Building
- Get listed in local directories and chambers of commerce
- Partner with complementary local businesses
- Sponsor local events and charities
- Create local content that attracts natural backlinks
- Guest post on local blogs and news sites

#### 5. Review Management
Reviews are a major local ranking factor. Build a system to:
- Request reviews from satisfied customers
- Respond to all reviews (positive and negative)
- Monitor your review profile across platforms
- Address negative feedback professionally

#### 6. AI Search Optimization
With AI-driven search (ChatGPT, Gemini, Perplexity) growing rapidly:
- Ensure your business information is consistent everywhere
- Create comprehensive, authoritative content
- Build strong brand signals across the web
- Optimize for conversational queries

### Measuring Local SEO Success
Track these key metrics:
- Google Business Profile impressions and clicks
- Local pack rankings for target keywords
- Direction requests and phone calls from GBP
- Website traffic from local searches
- Review count and average rating trends`,
      category: "Local SEO",
      image:
        "https://shahidmohammad.com/wp-content/uploads/2025/12/Shahid-Mohammad-674x380.jpg",
    },
    {
      title: "AI Search Optimization: How to Rank in ChatGPT, Gemini & Perplexity",
      slug: "ai-search-optimization-guide",
      excerpt:
        "AI search is changing how people find businesses. Learn how to optimize your online presence so AI engines recommend you to potential customers.",
      content: `## The Rise of AI Search

AI-powered search engines like ChatGPT, Google Gemini, and Perplexity are fundamentally changing how people discover businesses and services. Unlike traditional search, AI engines synthesize information from multiple sources to provide direct answers — meaning your business needs to be visible across the entire web, not just on Google.

### How AI Search Differs from Traditional SEO

| Aspect | Traditional SEO | AI Search Optimization |
|--------|----------------|----------------------|
| Goal | Rank #1 on Google | Be cited/recommended by AI |
| Content | Keyword-optimized | Authoritative & comprehensive |
| Signals | Backlinks, technical | Mentions, brand authority |
| Format | Short-form works | Long-form, detailed content |
| Sources | Your website | Multiple web sources |

### Strategies for AI Search Visibility

#### 1. Build Brand Authority
AI engines prioritize authoritative sources. Build your authority through:
- Publishing original research and data
- Getting mentioned by reputable publications
- Building a strong social media presence
- Creating content that others reference and cite

#### 2. Create Comprehensive Content
AI engines favor content that thoroughly covers a topic:
- Write detailed, long-form guides (2,000+ words)
- Cover topics from multiple angles
- Include expert opinions and citations
- Update content regularly with fresh information

#### 3. Optimize for Entity Recognition
AI engines understand entities (people, organizations, concepts):
- Use consistent naming across all platforms
- Implement schema markup on your website
- Create and maintain a Google Knowledge Panel
- Ensure your Wikipedia and Wikidata entries are accurate

#### 4. Diversify Your Online Presence
AI engines pull from multiple sources:
- Maintain active profiles on LinkedIn, YouTube, and industry platforms
- Get listed in relevant directories and databases
- Participate in industry forums and Q&A sites
- Publish on multiple platforms (Medium, industry publications)

#### 5. Focus on E-E-A-T
Experience, Expertise, Authoritativeness, and Trustworthiness:
- Showcase credentials and experience
- Get endorsements from recognized experts
- Maintain transparent business practices
- Build trust through consistent, valuable content

### Measuring AI Search Performance
- Monitor mentions in AI-generated responses
- Track referral traffic from AI platforms
- Use brand monitoring tools for citation tracking
- Compare visibility across ChatGPT, Gemini, and Perplexity`,
      category: "AI SEO",
      image:
        "https://shahidmohammad.com/wp-content/uploads/2025/04/Profile-picture.png",
    },
    {
      title: "Google Business Profile Optimization: 15 Proven Tips for Higher Rankings",
      slug: "google-business-profile-optimization-tips",
      excerpt:
        "Your Google Business Profile is the most powerful tool for local search visibility. These 15 tips will help you outrank competitors in the local pack.",
      content: `## Why Google Business Profile Optimization Matters

Your Google Business Profile (GBP) is often the first thing potential customers see when searching for local services. A well-optimized profile can dramatically increase your visibility in the local pack, Google Maps, and organic search results.

### 15 Proven GBP Optimization Tips

#### 1. Claim and Verify Your Profile
If you haven't claimed your GBP, you're missing out on the most important local SEO tool available. Verify your business immediately.

#### 2. Choose the Right Primary Category
Your primary category has the strongest impact on rankings. Choose the most specific, relevant category for your business.

#### 3. Add All Relevant Secondary Categories
Include up to 9 secondary categories that accurately describe your services. Don't add irrelevant categories just for keywords.

#### 4. Write a Keyword-Rich Description
Use your 750-character description wisely:
- Include your primary keywords naturally
- Mention your services and service area
- Highlight what makes you unique
- Avoid keyword stuffing

#### 5. Add High-Quality Photos
Businesses with photos receive 42% more requests for directions and 35% more click-throughs to their websites. Add:
- Professional exterior and interior photos
- Team photos
- Service/product photos
- At least 10-15 photos to start

#### 6. Keep Your Hours Updated
Update your hours for holidays and special occasions. Accurate hours prevent negative customer experiences.

#### 7. Use Google Posts Regularly
Google Posts keep your profile fresh and engaging:
- Post at least once per week
- Include a clear call-to-action
- Use high-quality images
- Promote offers, events, and updates

#### 8. Collect Reviews Consistently
Reviews are a major ranking factor:
- Ask every satisfied customer for a review
- Make it easy with direct links
- Respond to every review within 24 hours
- Never buy or incentivize reviews

#### 9. Add Products and Services
List your specific services with descriptions and prices where applicable. This helps Google match your business to relevant searches.

#### 10. Use the Q&A Feature
Proactively add common questions and answers to your profile. This helps customers and provides more keyword-rich content.

#### 11. Maintain NAP Consistency
Your Name, Address, and Phone number must be identical across all online platforms — your website, GBP, directories, and social media.

#### 12. Add Service Areas
If you serve customers at their locations, add your service areas to your profile. This expands your visibility beyond your physical address.

#### 13. Monitor and Respond to Messages
Enable messaging and respond promptly. Google tracks your response rate and time.

#### 14. Use Insights to Guide Strategy
Review your GBP insights regularly to understand:
- How customers find you
- What search terms they use
- Where they go (website, directions, calls)
- Peak engagement times

#### 15. Keep Information Current
Outdated information hurts your rankings and customer trust. Review and update your profile monthly.`,
      category: "Local SEO",
      image:
        "https://shahidmohammad.com/wp-content/uploads/2024/11/Shahid-Mohammad-3-Banner.jpg",
    },
  ];

  for (const post of posts) {
    await db.blogPost.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    });
  }

  console.log("Seeded blog posts:", posts.length);
}

seed()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
