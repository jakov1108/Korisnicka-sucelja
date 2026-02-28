import { db } from "./db";
import { carVariants } from "../shared/schema";
import { carGenerations, carModels } from "../shared/schema";
import { eq, isNull, or } from "drizzle-orm";

async function listMissingVideos() {
  const variants = await db
    .select({
      id: carVariants.id,
      engineName: carVariants.engineName,
      generationId: carVariants.generationId,
      videoUrl: carVariants.videoUrl,
    })
    .from(carVariants)
    .where(or(isNull(carVariants.videoUrl), eq(carVariants.videoUrl, "")));

  for (const v of variants) {
    const gen = await db.select({ name: carGenerations.name, modelId: carGenerations.modelId }).from(carGenerations).where(eq(carGenerations.id, v.generationId));
    if (!gen[0]) continue;
    const model = await db.select({ brand: carModels.brand, model: carModels.model }).from(carModels).where(eq(carModels.id, gen[0].modelId));
    if (!model[0]) continue;
    console.log(`${model[0].brand} ${model[0].model} ${gen[0].name} - ${v.engineName} (ID: ${v.id})`);
  }
  
  console.log(`\nTotal: ${variants.length} variants without video`);
  process.exit(0);
}

listMissingVideos();
