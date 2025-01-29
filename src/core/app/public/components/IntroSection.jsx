import { motion } from 'framer-motion';

const IntroSection = () => {
    return (<>

        <section className="py-20 bg-base-100">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="prose prose-lg max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl font-bold mb-8">Experiencia y Compromiso</h2>
                    <p className="mb-6">
                        Con más de 20 años de experiencia en la prevención, preparación y respuesta ante emergencias,
                        incluyendo 17 años como suboficial en la línea de fuego en el Cuerpo de Bomberos Voluntarios
                        de Valledupar, ofrecemos soluciones integrales para la seguridad laboral.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <div className="badge badge-lg">ISO 14001:2015</div>
                        <div className="badge badge-lg">Decreto 1072 de 2015</div>
                        <div className="badge badge-lg">Resolución 0312 de 2019</div>
                    </div>
                </motion.div>
            </div>
        </section>

    </>);
}

export default IntroSection;