"use client"

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-border py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container-wide">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="md:col-span-2">
            <h4
              style={{ fontFamily: "var(--font-accent)" }}
              className="font-bold text-lg mb-4"
            >
              Asmaa Adel
            </h4>
            <p
              style={{ fontFamily: "var(--font-body)" }}
              className="text-sm text-muted-foreground leading-relaxed"
            >
              Premium translation & localization specialist. Bridging languages,
              cultures, and creating meaningful global connections.
            </p>
          </div>

          {[
            {
              title: "Services",
              links: ["Translation", "Localization", "Strategy"],
            },
            { title: "Company", links: ["About", "Portfolio", "Process"] },
            { title: "Connect", links: ["LinkedIn", "Email", "WhatsApp"] },
          ].map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 * i,
                duration: 0.6,
              }}
              viewport={{ once: true }}
            >
              <h5
                style={{ fontFamily: "var(--font-accent)" }}
                className="font-semibold mb-4"
              >
                {col.title}
              </h5>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{ fontFamily: "var(--font-body)" }}
                      className="text-sm text-muted-foreground hover:text-accent-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p
            style={{ fontFamily: "var(--font-body)" }}
            className="text-sm text-muted-foreground"
          >
            © 2024 Asmaa Adel. Crafted with precision and luxury.
          </p>
          <p
            style={{ fontFamily: "var(--font-body)" }}
            className="text-sm text-muted-foreground"
          >
            Experimental design with Awwwards inspiration.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
