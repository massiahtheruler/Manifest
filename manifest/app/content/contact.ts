import { siteContent } from "./site";

export const emailConfig = {
  publicKey: "ZCV5aL5wDiIB1JwGY",
  serviceId: "service_justinH",
  templateId: "template_1s2j1el",
};

export const intakeContent = {
  title: "Get your Identity Gap Audit™",
  intro:
    "Most businesses don't have a value problem. They have a perception problem. Send what exists today, and I'll show you where first impressions, trust, and clarity begin to drift apart.",
  helper:
    "Include your website, social profiles, Google Business listing, or anything a customer would realistically see first. The more complete the picture, the more useful the audit.",
  directEmailHref: `mailto:${siteContent.email}`,
  fields: {
    name: "Your name",
    email: "Email address",
    business: "Business name",
    website: "Current website or main online presence",
    service: "What are you interested in?",
    goal: "What should people understand immediately?",
    concern: "Where does the business feel unclear online?",
  },
};
