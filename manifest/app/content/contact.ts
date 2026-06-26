import { siteContent } from "./site";

export const emailConfig = {
  publicKey: "ZCV5aL5wDiIB1JwGY",
  serviceId: "service_justinH",
  templateId: "template_1s2j1el",
};

export const intakeContent = {
  title: "Get your Identity Gap Score",
  intro:
    "This is a first-impression audit request, not a sales ambush. Send what exists now and what you want the business to become.",
  helper:
    "Include the current website, social links, the business goal, and what feels unclear. If the form acts up, email directly.",
  directEmailHref: `mailto:${siteContent.email}`,
  fields: {
    name: "Name",
    email: "Email",
    business: "Business name",
    website: "Website or social link",
    goal: "What should people understand faster?",
    concern: "Where do you think trust is leaking right now?",
  },
};
