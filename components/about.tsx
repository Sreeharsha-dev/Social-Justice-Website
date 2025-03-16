"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Vision</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Learn about our history, values, and the driving force behind our commitment to social justice and legal
            rights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                The Social Justice & Legal Rights Forum is dedicated to advocating for the rights of marginalized
                communities, providing legal assistance to those in need, and working towards a more just and equitable
                society. We believe that access to justice is a fundamental right, not a privilege.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                We envision a world where every individual has equal access to justice, where human rights are respected
                and protected, and where social inequalities are addressed through systemic change. We strive to be at
                the forefront of this transformation.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Our Values</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Integrity and transparency in all our actions</li>
                <li>Respect for the dignity and rights of all individuals</li>
                <li>Commitment to diversity, equity, and inclusion</li>
                <li>Collaboration with communities and organizations to achieve common goals</li>
                <li>Innovation in addressing complex social and legal challenges</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/placeholder.svg?height=800&width=600')",
                }}
              ></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">Our History</h3>
                <p className="text-white/90">
                  Founded in 2010, the Social Justice & Legal Rights Forum has grown from a small group of dedicated
                  volunteers to a nationally recognized organization with a track record of successful advocacy and
                  community impact.
                </p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

