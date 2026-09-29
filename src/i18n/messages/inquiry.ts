import { Locale } from "../config";

export const inquiryMessages: Record<Locale, { title: string; description: string; datasheet: string }> = {
  en: { title: "Interested in {product}?", description: "Get a datasheet, technical consultation, or a project-specific quote from our engineering team.", datasheet: "Get Datasheet" },
  ar: { title: "هل أنت مهتم بـ {product}؟", description: "احصل على ورقة بيانات أو استشارة فنية أو عرض سعر خاص بمشروعك من فريقنا الهندسي.", datasheet: "طلب ورقة البيانات" },
  fr: { title: "Vous souhaitez en savoir plus sur {product} ?", description: "Demandez une fiche technique, un conseil technique ou un devis adapté à votre projet à notre équipe d’ingénierie.", datasheet: "Demander la fiche technique" },
  es: { title: "¿Le interesa {product}?", description: "Solicite una ficha técnica, asesoramiento técnico o un presupuesto para su proyecto a nuestro equipo de ingeniería.", datasheet: "Solicitar ficha técnica" },
  ru: { title: "Вас интересует {product}?", description: "Запросите техническое описание, консультацию или коммерческое предложение для вашего проекта у нашей инженерной команды.", datasheet: "Запросить техническое описание" },
  zh: { title: "对{product}感兴趣？", description: "向我们的工程团队索取产品资料、技术咨询或项目报价。", datasheet: "索取产品资料" },
};
