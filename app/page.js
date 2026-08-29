"use client";

import {
  HeartPulse,
  Stethoscope,
  Users,
  GraduationCap,
  Activity,
  ShieldCheck,
  ArrowRight,
  BookOpen,
  Microscope,
  Brain,
  CalendarDays,
  Mail,
  ChevronRight,
} from "lucide-react";

const leaders = [
  {
    name: "Salman Mohammed",
    role: "Club Leader",
  },
  {
    name: "Khalid Arab",
    role: "Co-Leader",
  },
  {
    name: "Yahya Juhar",
    role: "Co-Leader",
  },
  {
    name: "Abdallah Awad",
    role: "Co-Leader",
  },
  {
    name: "Zinash Debele",
    role: "Teacher Advisor",
  },
];

const pillars = [
  {
    icon: GraduationCap,
    title: "Learn",
    text: "Explore medicine, biology, anatomy and health science through engaging student activities.",
  },
  {
    icon: Users,
    title: "Lead",
    text: "Develop confidence, teamwork and leadership skills while working with other students.",
  },
  {
    icon: HeartPulse,
    title: "Heal",
    text: "Build a culture of health awareness, compassion and service within our school community.",
  },
];

const activities = [
  {
    icon: Stethoscope,
    title: "Medical Skills",
    text: "Learn about clinical skills, first aid, vital signs and healthcare careers.",
  },
  {
    icon: Microscope,
    title: "Science Sessions",
    text: "Discover biology, anatomy, physiology and the science behind medicine.",
  },
  {
    icon: Brain,
    title: "Health Education",
    text: "Create awareness about healthy living, prevention and important health topics.",
  },
  {
    icon: ShieldCheck,
    title: "Community Service",
    text: "Work together on meaningful initiatives that support our school community.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5fbfd] text-[#102a43]">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-[#d9e9ef] bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#dff8fc] text-[#27c7df]">
              <HeartPulse size={26} />
            </div>

            <div>
              <p className="text-lg font-black tracking-tight">
                EISJ Medical Club
              </p>
              <p className="text-xs font-semibold text-[#627d98]">
                Learn • Lead • Heal
              </p>
            </div>
          </div>

          <a
            href="#join"
            className="hidden rounded-full bg-[#062b49] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#087ea4] sm:block"
          >
            Join the Club
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#bff4fa] opacity-50 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#dceeff] opacity-60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">

          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#bcecf3] bg-white px-4 py-2 text-sm font-bold text-[#087ea4] shadow-sm">
              <Activity size={17} />
              Student Health • Science • Leadership
            </div>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
              Future
              <br />
              healthcare
              <br />
              leaders
              <br />
              start here.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#627d98] sm:text-xl">
              The official EISJ Medical Club brings students together to
              learn, lead, serve, and build a healthier future through science
              and compassion.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#about"
                className="group flex items-center gap-2 rounded-full bg-[#062b49] px-6 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#087ea4]"
              >
                Explore the Club
                <ArrowRight
                  size={19}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="#activities"
                className="rounded-full border border-[#cbdfe8] bg-white px-6 py-4 font-bold text-[#102a43] transition hover:border-[#27c7df] hover:text-[#087ea4]"
              >
                Our Activities
              </a>
            </div>
          </div>

          {/* HERO CARD */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-[#27c7df]/30 to-[#087ea4]/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white p-8 shadow-[0_25px_70px_rgba(6,43,73,0.15)]">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#dff8fc] text-[#27c7df]">
                  <Stethoscope size={34} />
                </div>

                <div className="rounded-full bg-[#eaf8f2] px-4 py-2 text-xs font-black text-[#16845b]">
                  EISJ
                </div>
              </div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#627d98]">
                Our Motto
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight">
                Learn.
                <br />
                Lead.
                <br />
                Heal.
              </h2>

              <div className="mt-8 h-2 overflow-hidden rounded-full bg-[#e8f4f7]">
                <div className="h-full w-2/3 rounded-full bg-[#27c7df]" />
              </div>

              <div className="mt-7 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-[#f5fbfd] p-4">
                  <HeartPulse className="mx-auto text-[#27c7df]" size={23} />
                  <p className="mt-2 text-xs font-bold">Health</p>
                </div>

                <div className="rounded-2xl bg-[#f5fbfd] p-4">
                  <BookOpen className="mx-auto text-[#087ea4]" size={23} />
                  <p className="mt-2 text-xs font-bold">Learning</p>
                </div>

                <div className="rounded-2xl bg-[#f5fbfd] p-4">
                  <Users className="mx-auto text-[#062b49]" size={23} />
                  <p className="mt-2 text-xs font-bold">Community</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="font-black uppercase tracking-[0.25em] text-[#27c7df]">
              Who We Are
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              More than a club.
              <br />
              A community of future healthcare leaders.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#627d98]">
              EISJ Medical Club is a student-centered community focused on
              medicine, science, health education, leadership and service.
              We create opportunities for students to explore healthcare and
              develop skills that can shape their future.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-[#d9e9ef] bg-[#f8fcfd] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#27c7df] hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#dff8fc] text-[#087ea4] transition group-hover:bg-[#087ea4] group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-2xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#627d98]">
                    {item.text}
                  </p>

                  <div className="mt-6 flex items-center gap-1 text-sm font-bold text-[#087ea4]">
                    Discover more
                    <ChevronRight size={17} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section id="activities" className="bg-[#f5fbfd] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-[#27c7df]">
                What We Do
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Learn medicine.
                <br />
                Experience science.
              </h2>
            </div>

            <p className="max-w-md text-[#627d98]">
              Our activities are designed to make healthcare education
              practical, exciting and meaningful for students.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {activities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#062b49] text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#627d98]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="font-black uppercase tracking-[0.25em] text-[#27c7df]">
              Leadership
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Meet the team
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[#627d98]">
              A team committed to creating meaningful opportunities for
              students interested in healthcare and science.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((leader, index) => (
              <div
                key={leader.name}
                className="rounded-3xl border border-[#d9e9ef] bg-[#f8fcfd] p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#062b49] text-lg font-black text-white">
                    {leader.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-black">{leader.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-[#087ea4]">
                      {leader.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="bg-[#062b49] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#6ee8f5]">
              Coming Together
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Learn together.
              <br />
              Grow together.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#b9d0dc]">
              From educational sessions to health-awareness initiatives,
              every activity gives students a chance to learn something new
              and make an impact.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-7 text-[#102a43] shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#dff8fc] text-[#087ea4]">
                <CalendarDays size={27} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#627d98]">
                  CLUB ACTIVITIES
                </p>
                <h3 className="text-xl font-black">
                  Stay connected
                </h3>
              </div>
            </div>

            <div className="mt-7 space-y-3">
              {[
                "Medical learning sessions",
                "Health awareness activities",
                "Science discussions",
                "Leadership opportunities",
              ].map((event) => (
                <div
                  key={event}
                  className="flex items-center gap-3 rounded-2xl bg-[#f5fbfd] p-4"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-[#27c7df]" />
                  <span className="font-semibold">{event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JOIN */}
      <section id="join" className="bg-[#f5fbfd] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#dff8fc] text-[#27c7df]">
            <HeartPulse size={32} />
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-tight sm:text-5xl">
            Your journey into healthcare
            <br />
            starts here.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#627d98]">
            Learn new skills, meet like-minded students and discover the
            world of medicine with EISJ Medical Club.
          </p>

          <a
            href="mailto:eisjmedicalclub@example.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#062b49] px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#087ea4]"
          >
            <Mail size={19} />
            Contact the Club
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#d9e9ef] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#dff8fc] text-[#27c7df]">
              <HeartPulse size={22} />
            </div>

            <div>
              <p className="font-black">EISJ Medical Club</p>
              <p className="text-xs text-[#627d98]">
                Learn • Lead • Heal
              </p>
            </div>
          </div>

          <p className="text-sm text-[#627d98]">
            © {new Date().getFullYear()} EISJ Medical Club
          </p>
        </div>
      </footer>

    </main>
  );
}