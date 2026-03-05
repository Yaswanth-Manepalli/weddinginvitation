import { useState } from "react";
import { MapPin, Calendar, Clock, Heart } from "lucide-react";
import CurtainReveal from "@/components/CurtainReveal";
import CountdownTimer from "@/components/CountdownTimer";
import PhotoGallery from "@/components/PhotoGallery";
import BackgroundMusic from "@/components/BackgroundMusic";
import ScrollReveal from "@/components/ScrollReveal";
import weddingBg from "@/assets/wedding-bg.jpg";

const Index = () => {
  const [curtainOpen, setCurtainOpen] = useState(false);

  return (
    <>
      {!curtainOpen && <CurtainReveal onOpen={() => setCurtainOpen(true)} />}
      <BackgroundMusic shouldPlay={curtainOpen} />

      <div
        className="min-h-screen bg-background"
        style={{
          backgroundImage: `url(${weddingBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="min-h-screen bg-background/85 backdrop-blur-[2px]">
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
            <ScrollReveal>
              <p className="font-display text-xl md:text-base tracking-[0.4em] uppercase text-muted-foreground mb-6">
                Wedding
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h1 className="font-script text-4xl md:text-8xl gold-text mb-3">
                Pratyusha
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div className="ornament-divider">
                <Heart className="w-8 h-8 text-gold fill-gold/30" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <h1 className="font-script text-4xl md:text-8xl gold-text mb-8">
                Srikanth
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={650}>
              <p className="font-display text-lg md:text-xl text-foreground/80 tracking-widest">
                2nd April 2026 &bull; 9:41 PM
              </p>
            </ScrollReveal>
          </section>

          {/* Emotional Message */}
          <section className="py-20 px-4">
            <ScrollReveal>
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-script text-4xl md:text-5xl gold-text mb-8">
                  With Blessings
                </h2>
                <p className="font-body text-lg md:text-xl leading-relaxed text-foreground/80 italic">
                  "Two souls, one heart — bound together by love, faith, and the blessings
                  of our families. With immense joy and gratitude, we invite you to witness
                  and celebrate the sacred union of our beloved daughter <b>Pratyusha</b> with <b>Srikanth</b>.
                  Your presence will be the greatest gift we could ask for."
                </p>
                <div className="section-divider mt-8" />
              </div>
            </ScrollReveal>
          </section>

          {/* Event Details */}
          <section className="py-20 px-4">
            <ScrollReveal>
              <h2 className="font-script text-4xl md:text-5xl gold-text text-center mb-16">
                Wedding Celebrations
              </h2>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Wedding Ceremony */}
              <ScrollReveal delay={100}>
                <div className="bg-cream-dark/60 backdrop-blur-sm border border-gold/20 rounded-xl p-8 text-center shadow-lg">
                  <h4 className="font-display text-xl font-semibold text-foreground mb-6 tracking-wider uppercase">
                    Wedding Ceremony
                  </h4>
                  <div className="space-y-4 font-body text-foreground/80">
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4 text-gold" />
                      <span className="text-lg">2nd April 2026</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4 text-gold" />
                      <span className="text-lg">9:41 PM</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-8 h-8 text-gold mb-14" />
                      <span className="text-lg">Near Groom's Home, Martur Mandal,<br></br>Bapatla Dist.</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Reception */}
              <ScrollReveal delay={250}>
                <div className="bg-cream-dark/60 backdrop-blur-sm border border-gold/20 rounded-xl p-8 text-center shadow-lg">
                  <h4 className="font-display text-xl font-semibold text-foreground mb-6 tracking-wider uppercase">
                    Reception
                  </h4>
                  <div className="space-y-4 font-body text-foreground/80">
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4 text-gold" />
                      <span className="text-lg">5th April 2026</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4 text-gold ml-8 mb-4 mt-4" />
                      <span className="text-lg">12:00 PM — Lunch</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-12 h-12 text-gold mb-16" />
                      <span className="text-md">Sri Laxmi Grand Convention Hall, N.H-16, Near Canossa Public School, Payakaraopeta</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Google Maps Button */}
            <ScrollReveal delay={400}>
              <div className="text-center mt-10">
                <a
                  href="https://maps.app.goo.gl/rAfY8JDjyrEaskU4A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold/40 bg-cream-dark/60 backdrop-blur-sm font-display text-sm tracking-wider uppercase text-foreground hover:bg-gold/10 transition-colors duration-300"
                >
                  <MapPin className="w-8 h-8 text-gold" />
                  Reception location on Google Maps<br></br><span className="font-display text-xs">click here</span>
                </a>
              </div>
            </ScrollReveal>
          </section>

          {/* Countdown */}
          <section className="py-20 px-4">
            <ScrollReveal>
              <h2 className="font-script text-4xl md:text-5xl gold-text text-center mb-12">
                Counting the Days
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <CountdownTimer />
            </ScrollReveal>
          </section>

          {/* Photo Gallery */}
          <section className="py-20 px-4">
            <ScrollReveal>
              <h2 className="font-script text-4xl md:text-5xl gold-text text-center mb-4">
                Our Moments
              </h2>
              <div className="section-divider mb-12" />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="max-w-4xl mx-auto">
                <PhotoGallery />
              </div>
            </ScrollReveal>
          </section>

          {/* Thank You */}
          <section className="py-24 px-4">
            <ScrollReveal>
              <div className="max-w-2xl mx-auto text-center">
                <Heart className="w-8 h-8 text-gold mx-auto mb-6 fill-gold/20" />
                <h2 className="font-script text-4xl md:text-6xl gold-text mb-8">
                  Thank You
                </h2>
                <p className="font-body text-lg md:text-xl text-foreground/70 italic leading-relaxed">
                  We look forward to celebrating with you.
                </p>
                <div className="ornament-divider mt-8">
                  <span className="font-script text-2xl gold-text">✦</span>
                </div>
              </div>
            </ScrollReveal>
          </section>
        </div>
      </div>
    </>
  );
};

export default Index;
