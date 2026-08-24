export type LegalBlock = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  paragraphsEnd?: string[];
};

export type LegalPageContent = {
  title: string;
  description: string;
  updated: string;
  intro?: string[];
  sections: LegalBlock[];
};

export const termsContent: LegalPageContent = {
  title: "Terms and Conditions",
  description:
    "The terms governing your access to and use of www.nicegeneco.com.ng and the services offered by NICEGENE Technology Solutions Limited.",
  updated: "August 2026",
  intro: [
    'These Terms and Conditions ("Terms") govern your access to and use of www.nicegeneco.com.ng (the "Site") and the services offered by NICEGENE Technology Solutions Limited ("NICEGENE," "the Company," "we," "us," or "our"), a company incorporated in Nigeria with RC number 9249681. By accessing the Site or engaging our services, you agree to be bound by these Terms.',
  ],
  sections: [
    {
      heading: "1. Use of the Site",
      paragraphs: [
        "You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to:",
      ],
      bullets: [
        "Use the Site in any way that violates any applicable local, national, or international law or regulation.",
        "Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Site, or that may harm the Company or users of the Site.",
        "Use the Site to transmit unsolicited advertising or promotional material, including \"junk mail\" or \"chain letters,\" without our express written consent.",
        "Attempt to gain unauthorised access to any part of the Site, other accounts, or computer systems connected to the Site.",
        "Impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.",
      ],
      paragraphsEnd: [
        "We reserve the right to terminate or suspend your access to the Site at any time, without notice, for any reason, including if we suspect a violation of these Terms.",
      ],
    },
    {
      heading: "2. Our Services",
      paragraphs: [
        "NICEGENE provides IT consulting and digital solutions, including but not limited to: cloud system development, migration and operations; IT consulting and digital transformation advisory; web and application development; system networking and infrastructure; digitization and records management; point of sale and inventory management systems; drone services; graphic design and video editing; the sale of technology gadgets and hardware; and professional technology training through NICEGENE Academy (collectively, the \"Services\").",
        "Specific Services are provided pursuant to a separate scope of work, proposal, quotation, or service agreement agreed with the client (a \"Service Agreement\"). Where any conflict arises between these Terms and a signed Service Agreement, the Service Agreement shall prevail in respect of the Services it covers.",
      ],
    },
    {
      heading: "3. Intellectual Property Rights",
      paragraphs: [
        "The Site and its entire contents, features, and functionality (including all information, software, text, designs, graphics, logos, and the selection and arrangement thereof) are owned by NICEGENE or its licensors and are protected by applicable copyright, trademark, and other intellectual property laws.",
        "These Terms permit you to use the Site for your personal, non-commercial use only. You must not copy, reproduce, distribute, modify, create derivative works from, or otherwise exploit any material on the Site without our prior written consent.",
        "Unless otherwise agreed in a Service Agreement, all custom software, source code, designs, and documentation developed by NICEGENE for a client shall vest in the client upon full payment of applicable fees, except for pre-existing NICEGENE tools, frameworks, and know-how, which remain our property and are licensed to the client for use in connection with the delivered solution.",
        "The NICEGENE name, logo, and all related names, logos, and slogans are trademarks of NICEGENE Technology Solutions Limited. You must not use these marks without our prior written permission.",
      ],
    },
    {
      heading: "4. Products, Payment & Delivery",
      bullets: [
        "Prices for technology gadgets, training programmes, and services are as stated on the Site or in a written quotation, and are subject to change without notice, except in respect of orders already confirmed.",
        "Payment terms (including deposits, milestone payments, and full upfront payment for hardware) will be specified in the applicable quotation or Service Agreement.",
        "Title to hardware and gadgets sold by NICEGENE passes to the client upon full payment. Manufacturer warranties on gadgets are passed through to the client; NICEGENE does not independently extend manufacturer warranty periods unless expressly stated.",
        "Delivery and implementation timelines are estimates. NICEGENE will communicate promptly if a timeline is at risk but shall not be liable for delays caused by factors outside its reasonable control, including third-party platform outages, client-side delays, or force majeure events.",
      ],
    },
    {
      heading: "5. Academy Enrolment",
      bullets: [
        "Enrolment in any NICEGENE Academy programme or the Tech Insight Series is confirmed only upon payment of the applicable fee (where chargeable) and completion of registration.",
        "Participants are expected to comply with the code of conduct communicated at the start of each programme. NICEGENE reserves the right to remove a participant from a programme for conduct that disrupts the learning environment.",
        "Certificates of Participation or Completion are issued only to participants who meet the stated requirements of the relevant programme, including attendance and any post-session evaluation.",
        "See our Refund, Cancellation & Service Guarantee Policy for enrolment cancellations and refunds.",
      ],
    },
    {
      heading: "6. Client Content and Data",
      paragraphs: [
        "Where you provide content, data, or materials to NICEGENE for the purpose of delivering a Service (\"Client Content\"), you represent and warrant that you own or control all necessary rights in that Client Content and that it does not infringe any third party's rights.",
        "NICEGENE will use Client Content solely to deliver the agreed Services and will not use, disclose, or repurpose Client Content beyond that scope, except as required to operate the underlying cloud or hosting infrastructure, or as otherwise agreed in writing or required by law.",
      ],
    },
    {
      heading: "7. Disclaimers",
      paragraphs: [
        "The Site and all information, materials, and Services made available through it are provided on an \"as is\" and \"as available\" basis, without warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.",
        "We do not guarantee that the Site or any deployed system will be uninterrupted, error-free, or immune to all security threats. Any technical or industry information provided on the Site is for general informational purposes only and does not constitute a binding commitment or professional advice specific to your circumstances.",
      ],
    },
    {
      heading: "8. Limitation of Liability",
      paragraphs: [
        "To the fullest extent permitted by law, NICEGENE, its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, or goodwill, arising from your access to or use of the Site or Services.",
        "Except in cases of gross negligence, wilful misconduct, or as otherwise agreed in a Service Agreement, NICEGENE's aggregate liability in connection with any Service shall not exceed the total fees paid by the client for that specific Service in the twelve (12) months preceding the claim.",
      ],
    },
    {
      heading: "9. Indemnification",
      paragraphs: [
        "You agree to defend, indemnify, and hold harmless NICEGENE, its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable legal fees) arising out of your violation of these Terms, misuse of the Site, or breach of any warranty regarding Client Content.",
      ],
    },
    {
      heading: "10. Third-Party Services and Links",
      paragraphs: [
        "Our Services rely on third-party infrastructure providers, including Amazon Web Services, Google Workspace, Microsoft Teams, Vidline etc. We are not responsible for the availability, security, or performance of these third-party platforms, though we take reasonable steps to select and configure them appropriately for each engagement. The Site may also contain links to third-party websites; we do not endorse and are not responsible for their content or practices.",
      ],
    },
    {
      heading: "11. Confidentiality",
      paragraphs: [
        "Each party agrees to keep confidential any non-public business, technical, or client information disclosed by the other party in connection with a Service, and to use it only for the purposes of that Service, except where disclosure is required by law or regulatory authority.",
      ],
    },
    {
      heading: "12. Termination",
      paragraphs: [
        "We may suspend or terminate your access to the Site at any time for conduct that we believe violates these Terms or is harmful to other users, the Company, or third parties. Termination of an ongoing Service Agreement shall be governed by the terms of that agreement.",
      ],
    },
    {
      heading: "13. Governing Law and Dispute Resolution",
      paragraphs: [
        "These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any dispute arising out of or relating to these Terms or the Site shall be resolved exclusively in the competent courts located in Lagos, Nigeria, or through such other dispute resolution mechanism as the parties may agree in a Service Agreement.",
      ],
    },
    {
      heading: "14. Changes to These Terms",
      paragraphs: [
        "We may update these Terms from time to time. We will notify you of material changes by posting the revised Terms on this page with an updated effective date. Your continued use of the Site or Services after such changes constitutes acceptance of the revised Terms.",
      ],
    },
    {
      heading: "15. Contact",
      paragraphs: [
        "Questions about these Terms can be sent to info@nicegeneco.com.ng or +234-8060704412.",
      ],
    },
  ],
};

export const privacyContent: LegalPageContent = {
  title: "Privacy Policy",
  description:
    "How NICEGENE collects, uses, stores, and discloses your Personal Data in line with the Nigeria Data Protection Act, 2023.",
  updated: "August 2026",
  intro: [
    'NICEGENE Technology Solutions Limited ("NICEGENE," "the Company," "we," or "us") is committed to safeguarding your privacy and protecting your Personal Data. This Privacy Policy explains how we collect, use, store, and disclose Personal Data in the course of providing our IT consulting, cloud, development, training, and hardware sales services (our "Services"), and the measures we take to keep your Personal Data confidential and secure.',
    "This Privacy Policy applies to information collected through our Website, our Academy platforms, and other channels related to our Services. By accessing our Website or using our Services, you confirm that you have read, understood, and agree to the collection, use, and disclosure of your Personal Data as described here. If you do not agree, please do not use our Website or Services.",
    "We may update this Privacy Policy from time to time. Where a change materially affects how your Personal Data is used or disclosed, we will notify you via a notice on our Website before the change takes effect.",
  ],
  sections: [
    {
      heading: "2. Definitions",
      bullets: [
        "Client: Any company, organisation, school, or individual that engages NICEGENE for its Services.",
        "Company / NICEGENE / we / us / our: NICEGENE Technology Solutions Limited.",
        "Country: The Federal Republic of Nigeria, where NICEGENE is incorporated and primarily operates.",
        "Data Controller: An entity that, alone or jointly with others, determines the purposes and means of Processing Personal Data.",
        "Data Protection Laws: The Nigeria Data Protection Act, 2023 (NDPA), the Nigeria Data Protection Act General Application and Implementation Directive, 2025 (GAID), and any other applicable data protection laws in the Country.",
        "NDPC: The Nigeria Data Protection Commission, the regulatory body overseeing data protection compliance in the Country.",
        "Personal Data: Any information relating to an identified or identifiable natural person.",
        "Processing / Process / Processed: Any operation performed on Personal Data, including collection, storage, use, disclosure, and erasure.",
        "Services: The IT consulting, cloud, development, networking, digitization, training, and hardware sales services provided by NICEGENE.",
        "Website: www.nicegeneco.com.ng and its subdomains.",
        "You: The individual or entity whose Personal Data may be collected or Processed by us.",
      ],
    },
    {
      heading: "3. Who We Are and How to Contact Us",
      paragraphs: [
        "NICEGENE Technology Solutions Limited, with registered address at Road 15, Lekki Gardens Estate Phase 3, Hitech Road, Lekki-Ajah, Lagos State, Nigeria, is the Data Controller responsible for your Personal Data under this Privacy Policy. For questions about this Policy, or to exercise your legal rights, please contact us at info@nicegeneco.com.ng.",
      ],
    },
    {
      heading: "4. What Personal Data We Collect",
      paragraphs: [
        "We collect Personal Data when you interact with us — for example, when you complete an inquiry or contact form, request our Services, purchase a gadget, enroll in NICEGENE Academy, subscribe to our communications, or apply for a role with us. This may include:",
      ],
      bullets: [
        "Identity Data: full name, and where relevant to Service delivery, government-issued identification and date of birth.",
        "Contact Data: residential or office address, email address, and telephone number.",
        "Billing and Financial Data: billing address and payment details for products, training, and services purchased.",
        "Service and Project Data: information you provide to enable us to design, build, or support a system, application, or network on your behalf.",
        "Academy Data: enrolment details, attendance, and assessment results for NICEGENE Academy and Tech Insight Series participants.",
        "Application Data: CVs, cover letters, and related information submitted for career opportunities.",
        "Usage Data: information collected automatically when you use our Website, such as IP address, browser type, device information, and pages visited (see our Cookie Policy for details).",
      ],
    },
    {
      heading: "5. How We Collect Your Personal Data",
      paragraphs: ["We collect Personal Data directly from you when you:"],
      bullets: [
        "Use any of our Services or purchase our products.",
        "Enrol in NICEGENE Academy or register for an event such as the Tech Insight Series.",
        "Fill out our online forms or contact our team.",
        "Use our Website.",
        "Apply for a job with us.",
      ],
    },
    {
      heading: "6. Our Legal Basis for Processing Your Personal Data",
      bullets: [
        "Consent: Where you agree to our collecting your Personal Data for a specific purpose.",
        "Contractual Obligation: Where Processing is necessary for us to deliver Services you have requested.",
        "Legal Obligation: To comply with applicable Data Protection Laws and other legal or regulatory requirements.",
        "Legitimate Interests: Where Processing is necessary for our legitimate business interests, such as improving our Services or securing our systems, provided these interests do not override your rights.",
      ],
    },
    {
      heading: "7. How We May Use Your Personal Data",
      bullets: [
        "To deliver and support the Services and products you have requested.",
        "To manage NICEGENE Academy enrolment, attendance, and certification.",
        "To process payments and maintain billing records.",
        "To communicate with you about your project, order, or enrolment.",
        "To send newsletters, event invitations, and Academy cohort updates, where you have opted in.",
        "To improve our Website, Services, and user experience through data analytics.",
        "To comply with applicable Data Protection Laws and other legal obligations.",
      ],
    },
    {
      heading: "8. Do We Share Your Personal Data With Third Parties?",
      paragraphs: [
        "We engage trusted third-party providers to support Service delivery, including cloud hosting and infrastructure providers (such as Amazon Web Services), collaboration and communication tools (such as Google Workspace and Microsoft Teams), and our virtual training platform (Vidline). We may also share anonymized or aggregated Usage Data with analytics partners to help us understand and improve Website performance.",
        "We may also disclose your Personal Data where necessary to comply with applicable laws or lawful requests from regulators or law enforcement, to protect the rights, property, or safety of NICEGENE or others, or to detect and prevent fraud. All third parties with whom we share your Personal Data are required to Process it in accordance with applicable Data Protection Laws and only for the purposes we specify.",
      ],
    },
    {
      heading: "9. International Data Transfers",
      paragraphs: [
        "Some of our third-party infrastructure providers, including AWS, may store or process data on servers located outside Nigeria. Where this occurs, we take reasonable steps to ensure such transfers are conducted in accordance with the Data Protection Laws, including through providers with appropriate safeguards in place.",
      ],
    },
    {
      heading: "10. Is Your Information Secure?",
      paragraphs: [
        "We apply appropriate technical, organisational, and security measures to protect your Personal Data, including access controls, secure cloud configurations, and staff confidentiality obligations. While we take security seriously, no system can be guaranteed completely secure, and we encourage you to use strong, unique credentials when accessing any NICEGENE platform.",
      ],
    },
    {
      heading: "11. How Long Do We Keep Your Information?",
      paragraphs: [
        "We retain your Personal Data only for as long as necessary to provide our Services and fulfil the purposes described in this Policy, or as required by applicable law. When we no longer need your information, we securely delete or anonymise it.",
      ],
    },
    {
      heading: "12. Your Legal Rights",
      paragraphs: [
        "Subject to applicable Data Protection Laws, you have the right to:",
      ],
      bullets: [
        "Request access to the Personal Data we hold about you.",
        "Request correction of inaccurate or incomplete Personal Data.",
        "Request erasure of your Personal Data, subject to applicable legal or contractual exceptions.",
        "Object to Processing of your Personal Data, including for direct marketing purposes.",
        "Request restriction of Processing in certain circumstances.",
        "Request the transfer of your Personal Data in a structured, machine-readable format, where applicable.",
        "Withdraw consent at any time where Processing is based on consent.",
        "Lodge a complaint with the NDPC if you believe your data protection rights have been infringed.",
      ],
      paragraphsEnd: ["To exercise any of these rights, contact us at info@nicegeneco.com.ng."],
    },
    {
      heading: "13. Automated Decision-Making and Profiling",
      paragraphs: [
        "We do not currently carry out Automated Decision-Making or Profiling with your Personal Data. If this changes, we will update this Privacy Policy, obtain any required consent, and Process your Personal Data in compliance with the Data Protection Laws.",
      ],
    },
    {
      heading: "14. Use of Artificial Intelligence",
      paragraphs: [
        "We may use artificial intelligence tools internally to support service delivery, such as improving system performance or drafting internal documentation. Where AI tools are used in a way that involves your Personal Data, we ensure this is done in accordance with the Data Protection Laws and this Privacy Policy.",
      ],
    },
    {
      heading: "15. Children's Privacy",
      paragraphs: [
        "Our Services, including NICEGENE Academy, are generally intended for adults and institutions. Where we support school platforms that include data relating to minors (such as student records for a client school), such data is Processed strictly on the instructions of, and under agreement with, the relevant school as Data Controller, and in accordance with applicable Data Protection Laws.",
      ],
    },
    {
      heading: "16. Contact Us",
      paragraphs: [
        "If you have questions about this Privacy Policy or how we handle your Personal Data, please contact us at info@nicegeneco.com.ng or 08060704412.",
      ],
    },
  ],
};

export const cookieContent: LegalPageContent = {
  title: "Cookie Policy",
  description:
    "How our Website uses cookies and similar tracking technologies to improve your browsing experience.",
  updated: "August 2026",
  intro: [
    "Our Website uses cookies and similar tracking technologies to improve your browsing experience, understand how visitors use our Site, and support essential site functionality.",
  ],
  sections: [
    {
      heading: "What Are Cookies?",
      paragraphs: [
        "Cookies are small text files placed on your device when you visit a website. They help the website remember your preferences and activity.",
      ],
    },
    {
      heading: "Types of Cookies We Use",
      bullets: [
        "Essential Cookies: Required for the Website to function properly, such as enabling navigation and secure form submission.",
        "Analytics Cookies: Help us understand how visitors interact with the Site, such as which pages are most visited, so we can improve it.",
        "Functionality Cookies: Remember your preferences, such as language or region, for a more personalised experience.",
      ],
    },
    {
      heading: "Managing Cookies",
      paragraphs: [
        "Most browsers allow you to control cookies through their settings, including blocking or deleting them. Please note that disabling essential cookies may affect the functionality of the Site.",
        "For more information on how we use your data generally, see our Privacy Policy.",
      ],
    },
  ],
};

export const refundContent: LegalPageContent = {
  title: "Refund, Cancellation & Service Guarantee Policy",
  description:
    "Our policy for consulting and development Services, NICEGENE Academy enrolment, and technology gadget sales.",
  updated: "August 2026",
  intro: [
    "This policy applies alongside our Terms and Conditions and covers three categories of purchase: consulting/development Services, NICEGENE Academy enrolment, and technology gadget sales.",
  ],
  sections: [
    {
      heading: "Consulting, Cloud & Development Services",
      bullets: [
        "Fees paid for scoped project work are generally non-refundable once work has commenced, given the resources committed at project kickoff.",
        "Where a Service Agreement includes milestone-based payments, any fees paid for milestones not yet delivered will be refunded if the engagement is terminated by mutual agreement, less costs already reasonably incurred.",
        "Where NICEGENE fails to deliver an agreed milestone due to our own fault and does not remedy this within a reasonable period after written notice, the client may be entitled to a partial refund for that milestone, as set out in the applicable Service Agreement.",
      ],
    },
    {
      heading: "NICEGENE Academy & Tech Insight Series",
      bullets: [
        "Cancellations made at least 7 days before a cohort or event start date are eligible for a full refund or, where preferred, transfer to a future cohort.",
        "Cancellations made less than 7 days before the start date are eligible for a 50% refund or a transfer to a future cohort, at NICEGENE's discretion.",
        "No refunds are issued once a training programme or event has commenced, except where NICEGENE cancels or materially changes the programme.",
        "If NICEGENE cancels a scheduled cohort or event, registered participants will receive a full refund or the option to transfer to the next available cohort.",
      ],
    },
    {
      heading: "Technology Gadget Sales",
      bullets: [
        "Gadgets may be returned within 48 hours of delivery if they are defective, damaged in transit, or materially different from what was ordered, provided they are unused and in original packaging.",
        "Manufacturer warranty claims are handled in accordance with the relevant manufacturer's warranty terms, which NICEGENE will assist in facilitating.",
        "Change-of-mind returns are not accepted once a gadget has been delivered and accepted, unless otherwise agreed at point of sale.",
      ],
    },
    {
      heading: "How to Request a Refund",
      paragraphs: [
        "To request a refund or cancellation, contact us at info@nicegeneco.com.ng with your order or enrolment reference. We aim to acknowledge all refund requests within 3 business days.",
      ],
    },
  ],
};

export type FaqItem = { question: string; answer: string };

export const faqItems: FaqItem[] = [
  {
    question: "What does NICEGENE Technologies do?",
    answer:
      "We are a Lagos-based IT consulting and digital solutions firm. We design and build cloud systems, websites and applications, networking infrastructure, and POS/inventory systems, and we deliver technology training through NICEGENE Academy, alongside gadget sales, drone services, and creative media.",
  },
  {
    question: "Who are your clients?",
    answer:
      "We work with schools, businesses, and public institutions — from single-branch retailers to multi-institution education commissions. Our flagship platform supports the Lagos Archdiocesan Education Commission across more than 10 schools.",
  },
  {
    question: "Do you provide support after a project is delivered?",
    answer:
      "Yes. Ongoing maintenance and technical support is core to how we work, and the scope of post-launch support is agreed as part of every Service Agreement.",
  },
  {
    question: "How do I enrol in NICEGENE Academy?",
    answer:
      "Visit the Academy page on our Website or call 08060704412 to see current cohorts and registration details for Cloud Computing, Web Development, and Data Analytics tracks.",
  },
  {
    question: "Do you only sell new gadgets?",
    answer:
      "We supply premium laptops, smartphones, and IT hardware from trusted global brands. Please contact our sales team for current stock and pricing.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Timelines depend on project scope and complexity. We provide a clear timeline as part of every proposal and keep clients updated throughout delivery.",
  },
  {
    question: "Do you work outside Lagos or outside Nigeria?",
    answer:
      "We are based in Lagos and primarily serve clients across Nigeria, with cloud-based Services that allow us to support institutions remotely. Contact us to discuss engagements outside Lagos.",
  },
  {
    question: "How do you handle data protection and privacy?",
    answer:
      "We operate in line with the Nigeria Data Protection Act, 2023, and are expanding our own data protection and privacy advisory services. See our Privacy Policy for full details on how we handle Personal Data.",
  },
];