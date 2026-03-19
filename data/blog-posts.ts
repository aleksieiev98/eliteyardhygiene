export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  keywords: string[];
  question: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-often-should-dog-poop-be-picked-up",
    title: "How Often Should Dog Poop Be Picked Up From Your Yard?",
    description:
      "Learn how often to schedule dog poop cleanup based on yard size, number of dogs, and how often your family uses the lawn.",
    date: "2026-03-19",
    readTime: "4 min read",
    category: "Scheduling",
    keywords: [
      "how often should dog poop be picked up",
      "weekly poop scoop service",
      "pet waste removal frequency",
      "dog waste cleanup service near me",
    ],
    question: "How often should my yard be cleaned if I have one dog or multiple dogs?",
    sections: [
      {
        heading: "Weekly service is the sweet spot for most homes",
        paragraphs: [
          "For most residential yards, weekly dog poop removal is the best balance between cleanliness, convenience, and price. A weekly schedule keeps waste from building up, reduces odor, and makes the yard more enjoyable for both pets and people.",
          "If your dog uses the backyard every day, waste can accumulate faster than most homeowners expect. Even a tidy-looking lawn can hide problem areas that become unpleasant over time.",
        ],
      },
      {
        heading: "Twice-weekly service helps multi-dog households",
        paragraphs: [
          "If you have two or more dogs, a smaller yard, or a family that spends a lot of time outside, twice-weekly pet waste removal often makes more sense. More frequent visits keep the grass cleaner and reduce that lingering smell that tends to show up between cleanings.",
          "This is especially helpful when kids use the yard regularly or when you entertain outdoors often.",
        ],
      },
      {
        heading: "One-time cleanups still have a place",
        paragraphs: [
          "A one-time dog poop cleanup is a great choice before parties, after vacations, at the start of spring, or if your yard has simply gotten away from you. It gives you a fast reset without committing to recurring service right away.",
          "Many homeowners start with a one-time cleanup and switch to weekly service once they see how much easier it makes yard care.",
        ],
      },
    ],
  },
  {
    slug: "is-dog-poop-bad-for-grass",
    title: "Is Dog Poop Bad for Grass? What Homeowners Should Know",
    description:
      "Dog waste can damage lawns, create odor, and attract pests. Here is why regular pet waste removal helps protect your yard.",
    date: "2026-03-18",
    readTime: "4 min read",
    category: "Yard Care",
    keywords: [
      "is dog poop bad for grass",
      "dog waste lawn damage",
      "yard deodorizing service",
      "pet waste removal for healthy lawn",
    ],
    question: "Does leaving dog poop in the yard hurt the lawn?",
    sections: [
      {
        heading: "Dog waste is not fertilizer",
        paragraphs: [
          "A common myth is that dog poop works like manure. In reality, pet waste is much harsher on lawns and can lead to damaged patches, discoloration, and unpleasant buildup if it is left behind too long.",
          "Because dogs eat high-protein diets, their waste has a different composition than manure from grazing animals. That makes it far less lawn-friendly than many people assume.",
        ],
      },
      {
        heading: "Odor and pests become a bigger issue over time",
        paragraphs: [
          "The longer waste sits, the more likely it is to create odor, attract flies, and make parts of the yard feel unusable. This is one reason recurring dog poop cleanup service is so valuable for busy homeowners.",
          "Regular cleanup keeps the lawn looking better and makes the whole outdoor space more comfortable to walk through, mow, and enjoy.",
        ],
      },
      {
        heading: "Consistency matters more than occasional cleanup",
        paragraphs: [
          "If you want a fresher yard, it is better to keep waste under control consistently rather than letting it pile up and doing large resets occasionally. Weekly or twice-weekly service creates a noticeable difference in how the yard looks and feels.",
          "For homeowners who want an extra-fresh finish, deodorizing can be a useful add-on after cleanup.",
        ],
      },
    ],
  },
  {
    slug: "can-dog-waste-make-your-family-sick",
    title: "Can Dog Waste Make Your Family Sick?",
    description:
      "Pet waste is more than a nuisance. It can create sanitation concerns, especially in yards used by children and pets.",
    date: "2026-03-17",
    readTime: "5 min read",
    category: "Health & Safety",
    keywords: [
      "can dog waste make you sick",
      "pet waste sanitation",
      "safe yard for kids and dogs",
      "dog poop cleanup service",
    ],
    question: "Is pet waste just unpleasant, or can it actually create health concerns?",
    sections: [
      {
        heading: "Pet waste is a sanitation issue, not just a visual one",
        paragraphs: [
          "Dog poop in the yard is easy to dismiss as a routine mess, but it can also be a hygiene concern. That matters even more when children play outside, dogs roam freely, or homeowners walk through the grass regularly.",
          "A cleaner yard helps reduce direct contact with waste and makes the outdoor space feel more comfortable and safe to use.",
        ],
      },
      {
        heading: "Clean tools and process matter",
        paragraphs: [
          "Professional pet waste removal is not just about scooping faster. It also helps when the company follows a sanitary process, secures gates, and disinfects tools between visits.",
          "Homeowners looking for dog poop cleanup near them often care just as much about reliability and cleanliness as they do about convenience.",
        ],
      },
      {
        heading: "A recurring plan helps you stay ahead of the mess",
        paragraphs: [
          "Waiting until the yard feels too dirty usually means dealing with stronger odor, more buildup, and a less pleasant cleanup overall. A regular schedule helps keep sanitation manageable before things spiral into a bigger job.",
          "That is why weekly pet waste removal is one of the most popular options for families with active outdoor routines.",
        ],
      },
    ],
  },
  {
    slug: "weekly-vs-twice-weekly-poop-scoop-service",
    title: "Weekly vs Twice-Weekly Poop Scoop Service: Which One Fits Your Yard?",
    description:
      "Compare weekly and twice-weekly poop scoop service for single-dog homes, multi-dog yards, and high-traffic families.",
    date: "2026-03-16",
    readTime: "4 min read",
    category: "Service Options",
    keywords: [
      "weekly vs twice weekly poop scoop service",
      "best dog poop cleanup plan",
      "multi dog yard service",
      "pet waste removal pricing",
    ],
    question: "Should I choose weekly or twice-weekly pet waste removal?",
    sections: [
      {
        heading: "Weekly is ideal for many homeowners",
        paragraphs: [
          "If you have one dog and a moderate-sized yard, weekly service is usually enough to keep the property clean and manageable. It is the most common starting point because it feels low-maintenance while still making a visible difference.",
          "It also fits well for homeowners who want dependable service without overcommitting.",
        ],
      },
      {
        heading: "Twice-weekly keeps higher-traffic yards cleaner",
        paragraphs: [
          "Twice-weekly service is often better for multi-dog homes, small yards, or families who spend a lot of time outdoors. If the yard gets heavy daily use, longer gaps between visits can lead to a noticeable drop in cleanliness.",
          "More frequent service often feels worth it when you are trying to maintain a more polished, guest-ready backyard.",
        ],
      },
      {
        heading: "Start with your yard habits, not just price",
        paragraphs: [
          "The right plan depends on how your household uses the space. If the lawn is where your dog runs, your kids play, and your family hangs out, more frequent cleanup usually delivers better value than the lowest sticker price alone.",
          "A free quote helps match the service plan to your yard size and pet count.",
        ],
      },
    ],
  },
  {
    slug: "what-happens-to-dog-poop-after-pickup",
    title: "What Happens to Dog Poop After Pickup?",
    description:
      "Homeowners often ask what happens after a pet waste removal visit. Here is what professional cleanup typically includes.",
    date: "2026-03-15",
    readTime: "3 min read",
    category: "Service Process",
    keywords: [
      "what happens to dog poop after pickup",
      "pet waste disposal service",
      "professional dog poop cleanup process",
      "dog waste removal company",
    ],
    question: "What does a professional pet waste removal visit actually include?",
    sections: [
      {
        heading: "The waste is collected and bagged during the visit",
        paragraphs: [
          "During a typical service visit, technicians walk the yard thoroughly, collect pet waste, and bag it as part of the cleanup process. The goal is not only to remove obvious piles but to leave the space feeling noticeably cleaner overall.",
          "A careful route and consistent process help prevent missed spots, especially in larger or multi-dog yards.",
        ],
      },
      {
        heading: "Communication is part of a premium service experience",
        paragraphs: [
          "Many homeowners prefer a service that sends text or email notifications after each visit. That way you know the cleanup was completed, the gate was checked, and the yard is ready to use again.",
          "Reliable communication builds trust, which is especially important for recurring local service businesses.",
        ],
      },
      {
        heading: "Add-ons can improve the final result",
        paragraphs: [
          "Some homeowners choose yard deodorizing or seasonal cleanup add-ons for an even fresher finish. These services are especially popular after a long winter, before hosting guests, or when restarting a neglected yard.",
          "If you are unsure what level of service you need, starting with a free quote is usually the simplest next step.",
        ],
      },
    ],
  },
  {
    slug: "one-time-dog-poop-cleanup-before-events",
    title: "Why One-Time Dog Poop Cleanup Is Perfect Before Parties, Showings, and Spring",
    description:
      "A one-time pet waste cleanup can quickly reset an overgrown yard before events, listings, outdoor season, or special weekends.",
    date: "2026-03-14",
    readTime: "4 min read",
    category: "One-Time Cleanup",
    keywords: [
      "one time dog poop cleanup",
      "spring yard cleanup service",
      "pet waste removal before party",
      "dog poop cleanup before house showing",
    ],
    question: "When does a one-time pet waste cleanup make the most sense?",
    sections: [
      {
        heading: "It is a fast reset for special situations",
        paragraphs: [
          "A one-time cleanup works well when you need the yard looking better quickly. Common reasons include hosting a party, preparing for a real estate showing, recovering after travel, or getting the lawn ready for spring.",
          "It is also a good option if recurring cleanup sounds helpful but you want to try the service first.",
        ],
      },
      {
        heading: "The visual difference is immediate",
        paragraphs: [
          "When a yard has been neglected for a while, even one thorough visit can create a dramatic before-and-after result. That visual transformation is one reason these cleanups convert so well for local service businesses.",
          "A polished yard feels more usable, more inviting, and much easier to maintain afterward.",
        ],
      },
      {
        heading: "Many customers turn one-time service into recurring help",
        paragraphs: [
          "After a reset cleanup, homeowners often realize how much time and mental energy the service saves them. Moving into a weekly plan is a natural next step if you want to keep the yard consistently clean.",
          "That makes one-time service both a practical fix and a strong entry point into recurring care.",
        ],
      },
    ],
  },
];

export function getAllPosts() {
  return [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
