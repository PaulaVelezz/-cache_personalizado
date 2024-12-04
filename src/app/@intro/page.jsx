import { cookies } from "next/headers";

export default function IntroPage() {
    const visitor = cookies().get("visitor")?.value;

    if (!visitor) return null;

    return (
        <section>
            <h2>Buenass 👋 <span className="text-orange-500 font-semibold">{visitor}</span>, muchas gracias por pasar a chusmear este proyecto! </h2>
        </section>
    );
};