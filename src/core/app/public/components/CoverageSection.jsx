import { motion } from "framer-motion";
import { coverage } from "../../../services/mock/coverage";

export const CoverageSection = () => {
    return (<>
        <section className="py-20 bg-base-100">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-12"
                >
                    Cobertura Regional
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {coverage.map((region, index) => (
                        <motion.div
                            key={region.region}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="card bg-base-200 shadow-lg"
                        >
                            <div className="card-body items-center text-center">
                                {region.icon}
                                <h3 className="card-title mt-2">{region.region}</h3>
                                <p className="text-sm">{region.cities}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>


    </>);
}