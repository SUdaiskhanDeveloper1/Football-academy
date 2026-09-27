import type { Faq } from "@/data/programmes";

export const faqGroups: { title: string; faqs: Faq[] }[] = [
  {
    title: "Getting started",
    faqs: [
      { question: "How do I book a free trial?", answer: "Complete the booking form on our Contact page or call us. We will confirm the right age group, venue and time within one working day." },
      { question: "What age groups do you coach?", answer: "We coach players from 4 to 18. Weekly training starts with Mini Kickers (4–6), with Foundation (7–9), Development (10–12) and Youth (13–16) groups, plus performance squads for 11–18." },
      { question: "Does my child need to play for a club?", answer: "No. Many of our players are complete beginners, while others play for grassroots or school teams. Sessions are grouped by age and ability." },
      { question: "Do you offer girls’ football?", answer: "Yes. All of our sessions are open to girls and boys, and we run dedicated girls-only sessions for ages 7–14 on Friday evenings." }
    ]
  },
  {
    title: "Sessions & kit",
    faqs: [
      { question: "What should my child wear?", answer: "Comfortable sports kit, football boots suitable for artificial grass, shin pads and a named water bottle. Players receive an academy training top when they join weekly training." },
      { question: "What happens if the weather is bad?", answer: "Most sessions are on floodlit 3G pitches and go ahead in rain. In severe weather we move indoors or cancel, and we notify parents by text and email at least two hours before." },
      { question: "Can parents watch sessions?", answer: "Yes. Parents are welcome in the viewing areas. We ask that parents let coaches do the coaching during sessions." }
    ]
  },
  {
    title: "Payments & bookings",
    faqs: [
      { question: "How do payments work?", answer: "Weekly training is paid monthly by direct debit and can be cancelled with one month’s notice. Camps and 1-to-1 sessions are paid when booking." },
      { question: "Do you offer sibling discounts?", answer: "Yes, 10% off weekly training for each additional sibling." },
      { question: "Can I use Tax-Free Childcare for camps?", answer: "Yes. Our holiday camps are eligible for Tax-Free Childcare and most childcare voucher schemes." }
    ]
  },
  {
    title: "Safety & welfare",
    faqs: [
      { question: "Are your coaches DBS checked?", answer: "Every member of staff holds an enhanced DBS check, completes FA safeguarding training and is first-aid qualified." },
      { question: "Who is your Designated Safeguarding Lead?", answer: "Our Welfare Officer and Designated Safeguarding Lead can be contacted in confidence at safeguarding@footballcoinacademy.co.uk. Full details are on our Safeguarding page." },
      { question: "What about medical conditions or additional needs?", answer: "Please tell us on the booking form. We work with families to make reasonable adjustments so every child can take part safely." }
    ]
  }
];

export const homeFaqs: Faq[] = [faqGroups[0].faqs[0], faqGroups[0].faqs[1], faqGroups[1].faqs[0], faqGroups[3].faqs[0]];
