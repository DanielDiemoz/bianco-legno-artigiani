import { z } from "zod";
import { createServerFn } from "@tanstack/react-start";

const schema = z.object({
  nome: z.string().trim().min(2, "Inserisci il tuo nome").max(100),
  email: z.string().trim().email("Indirizzo email non valido").max(255),
  telefono: z.string().trim().max(30).optional().or(z.literal("")),
  messaggio: z
    .string()
    .trim()
    .min(10, "Descrivi brevemente il lavoro (min. 10 caratteri)")
    .max(1000),
});

export const submitContact = createServerFn({ method: "POST" })
  .validator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const { nome, email, telefono, messaggio } = data;

    console.log("[Contact Submission]", { nome, email, telefono, messaggio });

    return { success: true };
  });
