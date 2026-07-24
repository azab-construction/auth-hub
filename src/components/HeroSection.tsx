import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { dir, lang } = useLanguage();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  const slogan =
    lang === "ar"
      ? "نحن ملتزمون بالحفاظ على منشآتكم بأفضل حال"
      : "We are committed to keeping your facilities in the best condition";

  const subSlogan =
    lang === "ar"
      ? "نظام المصادقة المركزي — بوابة واحدة لجميع منصات وخدمات مجموعة العزب"
      : "Central Authentication — one gateway to all Alazab Group platforms and services";

  return (
    <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://assets.mixkit.co/videos/preview/mixkit-modern-buildings-and-a-crane-at-a-construction-site-45478-large.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030957]/85 via-[#030957]/70 to-[#030957]/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030957_90%)] opacity-60" />

      {/* Content */}
      <div className="container relative h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs md:text-sm font-medium mb-6"
        >
          <ShieldCheck className="w-4 h-4 text-primary" />
          {lang === "ar" ? "مجموعة العزب للمقاولات" : "Alazab Contracting Group"}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-heading font-extrabold text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] max-w-5xl drop-shadow-2xl"
        >
          {slogan}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-6 text-white/80 text-base md:text-xl max-w-2xl leading-relaxed"
        >
          {subSlogan}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            className="h-13 px-10 text-base gap-2.5 bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-xl shadow-2xl shadow-primary/40"
            asChild
          >
            <Link to="/auth/login">
              {lang === "ar" ? "ابدأ الآن" : "Get Started"}
              <Arrow className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-13 px-10 text-base border-white/25 bg-white/5 backdrop-blur-md text-white hover:bg-white/15 hover:border-white/40 rounded-xl"
            asChild
          >
            <a href="#services">
              {lang === "ar" ? "استكشف الخدمات" : "Explore Services"}
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5"
      >
        <div className="w-1 h-2 rounded-full bg-primary" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
