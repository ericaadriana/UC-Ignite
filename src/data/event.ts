// All event content in one place, so it's easy to update.

export const event = {
  name: "IGNITE",
  fullName: "UC Global Entrepreneurship Week 2026",
  theme:
    "Building Beyond Borders: Entrepreneurship, Technology & Connections for a Sustainable Future",
  venue: "Universitas Ciputra",
  city: "Surabaya, Indonesia",
  dates: "18–20 Nov 2026",
  // Countdown target, in Surabaya time (WIB, UTC+7).
  startsAt: "2026-11-18T08:00:00+07:00",
  endsAt: "2026-11-21T00:00:00+07:00",
  registerUrl: "https://forms.gle/dq55e72DgkMx2MmJ6",
  instagram: "uc_ejourney",
  site: "ucignite2026.vercel.app",
};

// Numbers from the UC Ignite Mini Booklet.
export const stats = [
  { value: "2,000+", label: "Participants" },
  { value: "3", label: "Days" },
  { value: "50+", label: "Bazaar tenants" },
  { value: "5", label: "Countries at IBCC" },
];

export const programs = [
  {
    title: "Global Stage",
    days: "Day 1",
    text: "Keynote and talkshow with the leaders of NUS's MSc in Venture Creation.",
    icon: "M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.4 7.2 16.9l.9-5.4L4.2 7.7l5.4-.8z",
  },
  {
    title: "UC IBCC",
    days: "Day 2",
    text: "International Business Case Competition with teams from 5 countries.",
    icon: "M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0zM7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4",
  },
  {
    title: "Parallel Insight Sessions",
    days: "Day 2 & 3",
    text: "Talks and hands-on workshops on technology, sustainable innovation and entrepreneurship.",
    icon: "M4 5h16v10H4zM2 19h20M9 15v4M15 15v4",
  },
  {
    title: "Bazaar & Entertainment",
    days: "Day 1 & 2",
    text: "50+ tenants from student and community businesses, plus student performances on stage.",
    icon: "M3 9l2-5h14l2 5M3 9h18v11H3zM9 20v-6h6v6",
  },
];

// Photos come from the "Item designs" folder on Google Drive.
export const speakers = [
  { photo: "astrid", name: "Prof. Dr. Astrid Kusumowidagdo", role: "Vice Rector for Entrepreneurship, Academic, and Research, Universitas Ciputra" },
  { photo: "ali", name: "Assoc. Prof. Ali Asgar S. Bhagat", role: "Academic Director, MSc in Venture Creation, National University of Singapore" },
  { photo: "sazali", name: "Mr. Sazali Johari", role: "Deputy Director, MSc in Venture Creation, National University of Singapore" },
  { photo: "trianggoro", name: "Prof. Dr. Trianggoro Wiradinata", role: "Vice Rector for Student Affairs, Employability, and Industry Collaboration, Universitas Ciputra" },
  { photo: "teddy", name: "Dr. Teddy Saputra, M.B.A.", role: "Center Director UCFBC, Universitas Ciputra" },
  { photo: "awanda", name: "Awanda Zidni Rizki, SP., MP.", role: "CEO of Plant Doctor, Founder of Satu Garis Waktu" },
  { photo: "elsafan", name: "Elsafan Nahak, S.Tr.Pt", role: "Founder of Switchkarir, Public Speaking Mentor" },
  { photo: "christina-erica", name: "Dr. Christina, S.T., M.M. & Erica Adriana, S.E., M.M.", role: "Entrepreneurship Course Section Head & Entrepreneurship Course Specialist, Universitas Ciputra" },
];

// Public schedule, based on the Mini Booklet and the operational rundowns.
export const schedule = [
  {
    day: "Day 1",
    date: "Wed, 18 Nov",
    focus: "Global Stage with NUS",
    items: [
      { time: "08.00 – 09.00", title: "Registration & Opening Ceremony" },
      { time: "09.00 – 10.30", title: "Global Stage: Assoc. Prof. Ali Asgar S. Bhagat (NUS)", note: "UC students only" },
      { time: "13.30 – 15.00", title: "Global Stage: Assoc. Prof. Ali Asgar S. Bhagat (NUS)", note: "Open to the public" },
      { time: "08.00 – 16.00", title: "Bazaar & student performances" },
    ],
  },
  {
    day: "Day 2",
    date: "Thu, 19 Nov",
    focus: "IBCC & Parallel Sessions",
    items: [
      { time: "09.00 – 12.00", title: "UC IBCC: Business Case Competition", note: "5 countries" },
      { time: "10.00 – 11.30", title: "Fireside session: Startup Ecosystem in Singapore", note: "Mr. Sazali Johari (NUS)" },
      { time: "13.30 – 16.30", title: "Parallel Insight Sessions, Track A & B", note: "Family Business · Humanities · Entrepreneurial Mindset · Tech & AI · Social Innovation · Venture Lab" },
      { time: "08.00 – 16.00", title: "Bazaar & live entertainment" },
    ],
  },
  {
    day: "Day 3",
    date: "Fri, 20 Nov",
    focus: "Final Sessions & Closing",
    items: [
      { time: "13.30 – 16.30", title: "Parallel Insight Sessions & Workshops, Track A & B", note: "Family Business · Venture Lab · Entrepreneurial Skills · Community · Tech & AI · Corporate Entrepreneurship" },
      { time: "TBA", title: "Closing Ceremony" },
    ],
  },
];

export const passes = [
  { name: "1 Day Pass", price: "35K", note: "Entry for one day of your choice", featured: false },
  { name: "3 Days Pass", price: "65K", note: "Full access, 18–20 November", featured: true },
];
