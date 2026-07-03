import {
  HeartPulse,
  Stethoscope,
  Users,
  ShieldCheck,
  ArrowRight,
  Activity,
  GraduationCap,
  HandHeart,
} from "lucide-react";

const leaders = [
  { name: "Salman Mohammed", role: "Club Leader", initials: "SM" },
  { name: "Khalid Arab", role: "Co-Leader", initials: "KA" },
  { name: "Yahya Juhar", role: "Co-Leader", initials: "YJ" },
  { name: "Abdallah Awad", role: "Co-Leader", initials: "AA" },
  { name: "Zinash Debele", role: "Teacher Advisor", initials: "ZD" },
];

const pillars = [
  {
    icon: GraduationCap,
    title: "Learn",
    text: "Explore medicine, health science, anatomy, prevention, and real-world healthcare topics.",
  },
  {
    icon: Users,
    title: "Lead",
    text: "Build confidence, teamwork, responsibility, communication, and student leadership.",
  },
  {
    icon: HandHeart,
    title: "Heal",
    text: "Promote compassion, service, hygiene, wellness, and positive impact in our community.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="hero-gradient min-h-screen text-white">
        <nav className="section-container flex items-center justify-between py-6">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/15 ring-1 ring-white/20">
              <HeartPulse className="h-6 w-6 text-cyan-300" />
            </div>

            <div>
              <p className="font-black tracking-tight">
                EISJ Medical Club
              </p>
              <p className="text-xs text-cyan-100/70">
                Learn • Lead • Heal
              </p>
            </div>
          </a>

          <a
            href="#leadership"
            className="hidden rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold backdrop-blur md:block"
          >
            Meet the Team
          </a>
        </nav>

        <div className="section-container grid min-h-[78vh] items-center gap-12 py-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
              <Activity className="h-4 w-4" />
              Student Health • Science • Leadership
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Future healthcare
              <span className="text-gradient block">
                leaders start here.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
              The official EISJ Medical Club brings students
              together to learn, lead, serve, and build a
              healthier future through science and compassion.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-black text-slate-900 transition hover:-translate-y-1"
              >
                Explore Our Mission
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href="#sponsor"
                className="glass rounded-full px-6 py-3.5 font-bold"
              >
                Official Sponsor
              </a>
            </div>
          </div>

          <div className="glass premium-shadow rounded-[2rem] p-7 sm:p-9">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
                  Our Motto
                </p>
                <h2 className="mt-2 text-3xl font-black">
                  Learn • Lead • Heal
                </h2>
              </div>

              <Stethoscope className="h-12 w-12 text-cyan-300" />
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Learn", "Lead", "Heal"].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/10"
                >
                  <p className="text-xs font-bold text-cyan-200">
                    0{index + 1}
                  </p>
                  <p className="mt-2 text-lg font-black">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="font-black uppercase tracking-[0.2em] text-cyan-600">
              Our Purpose
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              More than a club. A community of future changemakers.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We connect medical learning with leadership,
              teamwork, service, hygiene awareness, and
              meaningful student-led initiatives.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="premium-shadow rounded-[1.75rem] border border-slate-100 bg-white p-8"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-cyan-50">
                  <Icon className="h-7 w-7 text-cyan-700" />
                </div>

                <h3 className="mt-6 text-2xl font-black text-slate-900">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="leadership"
        className="bg-slate-950 py-24 text-white"
      >
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="font-black uppercase tracking-[0.2em] text-cyan-300">
              Leadership
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Meet the team leading the mission.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((leader) => (
              <article
                key={leader.name}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/15 font-black text-cyan-200 ring-1 ring-cyan-300/20">
                  {leader.initials}
                </div>

                <h3 className="mt-6 text-xl font-black">
                  {leader.name}
                </h3>

                <p className="mt-2 text-cyan-300">
                  {leader.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sponsor" className="py-24">
        <div className="section-container">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-red-600 to-red-800 p-8 text-white premium-shadow sm:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-7 w-7" />

                  <p className="font-black uppercase tracking-[0.2em] text-red-100">
                    Official Sponsor
                  </p>
                </div>

                <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                  Lifebuoy
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-red-50">
                  Supporting the EISJ Medical Club vision for
                  stronger health awareness, hygiene education,
                  student leadership, and community wellbeing.
                </p>
              </div>

              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white text-center text-xl font-black text-red-700 shadow-2xl">
                LIFE
                <br />
                BUOY
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="section-container flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-black text-slate-900">
              EISJ Medical Club
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Learn • Lead • Heal
            </p>
          </div>

          <p className="text-sm text-slate-500">
            © 2026 EISJ Medical Club. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
