"use client";

import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white font-bold text-xl mb-4">SmartDrill Technologies</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
            <p className="text-white/40 text-sm mt-4">
              Qingdao, Shandong, China
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.products')}</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="/features" className="hover:text-white transition-colors">{t('nav.products')}</a></li>
              <li><a href="/videos" className="hover:text-white transition-colors">{t('nav.videos')}</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">{t('footer.contact')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>WhatsApp: +8613687681792</li>
              <li>Email: bimongl@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/40 text-sm">
          © 2024 SmartDrill Technologies. {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}
