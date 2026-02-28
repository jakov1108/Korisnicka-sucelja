import { db } from "./db";
import { carVariants } from "../shared/schema";
import { eq } from "drizzle-orm";

const videoUpdates: { id: string; videoUrl: string; label: string }[] = [
  // ============ VW Taigo ============
  { id: "4720ed6c-d5ba-453e-9487-36add37711ac", videoUrl: "https://www.youtube.com/embed/Pvr_zKPeRCc", label: "VW Taigo 1.0 TSI - Jura se fura" },
  { id: "4a82cbbb-e641-43ec-9b9f-685244f50e64", videoUrl: "https://www.youtube.com/embed/Pvr_zKPeRCc", label: "VW Taigo 1.5 TSI - Jura se fura" },

  // ============ Škoda Kodiaq ============
  { id: "fe91f899-8414-4f08-94ec-b30fd01d4cff", videoUrl: "https://www.youtube.com/embed/2Frki1jRgVI", label: "Škoda Kodiaq 2.0 TDI - Jura se fura" },
  { id: "fc873b0a-3575-42c4-8a85-c2a31ebe5c3b", videoUrl: "https://www.youtube.com/embed/ndAfiMNeg8w", label: "Škoda Kodiaq 2.0 TDI 4x4 DSG" },
  { id: "60abd9b0-55c0-47f2-b012-fdeac3c9c701", videoUrl: "https://www.youtube.com/embed/6rhLQE1P_DI", label: "Škoda Kodiaq RS - Šebalj" },

  // ============ Hyundai Grand i10 ============
  { id: "54d6663f-5358-4a8d-bb31-4207191f2f1d", videoUrl: "https://www.youtube.com/embed/nyJ2KMIhbUg", label: "Hyundai i10 1.0 MPI - Šebalj" },
  { id: "1b03793d-e0ac-4fcf-8926-95f5015362f2", videoUrl: "https://www.youtube.com/embed/6j54Rl7GktQ", label: "Hyundai i10 1.2 MPI - Flajnik" },

  // ============ VW Golf VII ============
  { id: "f64840c8-9d03-4291-9abf-cd7e64bf6df4", videoUrl: "https://www.youtube.com/embed/7_yYVv9Dmhs", label: "Golf VII 2.0 TDI - GTD test" },
  { id: "87ef7645-ee62-4344-91d8-01004251a0be", videoUrl: "https://www.youtube.com/embed/ETBDBlKw3Mg", label: "Golf VII 1.6 TDI - Jura se fura" },
  { id: "f5223d91-7264-42bd-977c-ee556e095128", videoUrl: "https://www.youtube.com/embed/ETBDBlKw3Mg", label: "Golf VII 1.4 TSI - Jura se fura" },
  { id: "0c7a1450-b3d8-4c78-bb77-9056d14e4bf0", videoUrl: "https://www.youtube.com/embed/ETBDBlKw3Mg", label: "Golf VII 2.0 TSI GTI - Jura se fura" },
  { id: "f7541f8f-fa3b-4ebe-8a3e-b520eb999cac", videoUrl: "https://www.youtube.com/embed/ETBDBlKw3Mg", label: "Golf VII 2.0 TSI R - Jura se fura" },

  // ============ VW Golf VIII ============
  { id: "fca48d69-b515-44da-80cb-a79b7d9fe2bb", videoUrl: "https://www.youtube.com/embed/L4WcEv10Sco", label: "Golf VIII 1.5 TSI - Jura se fura" },
  { id: "419546c8-b87b-4561-83af-d5c897829b23", videoUrl: "https://www.youtube.com/embed/7U5vqrLRaqI", label: "Golf VIII 2.0 TDI - Jura se fura dizel" },
  { id: "817659e6-8a86-4a61-8ee7-980d02a0b3f0", videoUrl: "https://www.youtube.com/embed/BpICJ41hQUI", label: "Golf VIII GTI - Najbolji Golf do sad?" },

  // ============ Škoda Octavia III ============
  { id: "08e73b78-197f-46e3-98f3-59ed7fceed86", videoUrl: "https://www.youtube.com/embed/HUHSE6oOPNg", label: "Octavia III 1.6 TDI - Jura se fura" },
  { id: "1a056902-0dbc-4f09-8c14-8416db81cdaa", videoUrl: "https://www.youtube.com/embed/HUHSE6oOPNg", label: "Octavia III 1.4 TSI - Jura se fura" },

  // ============ Škoda Octavia IV ============
  { id: "9c334f4f-0252-4d46-a6a8-ababb78e1ec8", videoUrl: "https://www.youtube.com/embed/i4e7VDIc18Q", label: "Octavia IV 1.5 TSI - Jura se fura" },
  { id: "736b4835-9f85-4af9-a9fe-1073e5df5784", videoUrl: "https://www.youtube.com/embed/DrP1xh1fqyA", label: "Octavia IV 2.0 TDI" },

  // ============ Toyota Corolla ============
  { id: "3e79d436-a8c8-4c48-8478-f51efe6cda10", videoUrl: "https://www.youtube.com/embed/YvhqeffIEwc", label: "Corolla 1.8 Hybrid - Šebalj" },
  { id: "ed120b95-198f-4c92-969f-dcaea167640d", videoUrl: "https://www.youtube.com/embed/yiV4mejOd40", label: "Corolla 2.0 Hybrid" },

  // ============ Renault Clio ============
  { id: "fa288173-84ab-4cf2-9532-1b0bd55323cf", videoUrl: "https://www.youtube.com/embed/dQHdyfJXYL0", label: "Clio IV 1.5 dCi" },
  { id: "c92a7d9e-b314-48af-8a45-0c5d0eda01ec", videoUrl: "https://www.youtube.com/embed/Amihid9jpaE", label: "Clio V 1.0 TCe - Jura se fura" },

  // ============ Hyundai Tucson ============
  { id: "c484f264-9f4a-48d5-be36-143572316b5f", videoUrl: "https://www.youtube.com/embed/9GnG3zTLe88", label: "Tucson TL 1.6 CRDi - Šebalj" },
  { id: "4d478082-6fd9-4dc8-9412-c89dab8c488f", videoUrl: "https://www.youtube.com/embed/WXYJzZ6fP9E", label: "Tucson NX4 Hybrid - Jura se fura" },

  // ============ VW Polo MK6 ============
  { id: "950eb022-1f02-4192-9b2b-bcd97ee2b3c6", videoUrl: "https://www.youtube.com/embed/xX3oaF6nPlM", label: "Polo MK6 1.6 - Polo Beats 1.0 TSI" },

  // ============ VW Polo MK1 ============
  { id: "3118e9d4-0d49-4f43-b11b-35300b8596e4", videoUrl: "https://www.youtube.com/embed/GZK3F8PmGGY", label: "Polo MK1 1.1 - classic Polo review" },

  // ============ VW Polo MK2 ============
  { id: "cb29dee5-ef34-4ac8-bd2c-6c39cede2018", videoUrl: "https://www.youtube.com/embed/GZK3F8PmGGY", label: "Polo MK2 1.0 - classic Polo review" },

  // ============ VW Polo MK3 ============
  { id: "3962859f-798d-4221-992e-55ae3d5ad83f", videoUrl: "https://www.youtube.com/embed/GZK3F8PmGGY", label: "Polo MK3 1.4" },
  { id: "667787dc-6914-486a-87b0-315de846ff47", videoUrl: "https://www.youtube.com/embed/GZK3F8PmGGY", label: "Polo MK3 1.9 SDI" },

  // ============ VW Polo MK4 ============
  { id: "7faee261-7c65-4976-87a5-10e5441997a7", videoUrl: "https://www.youtube.com/embed/Ul373Zz5XfE", label: "Polo MK4 1.4 TDI" },
  { id: "33dcdc4a-a86f-4a02-afbd-2995287d23cc", videoUrl: "https://www.youtube.com/embed/Ul373Zz5XfE", label: "Polo MK4 1.4 FSI" },

  // ============ VW Polo MK5 ============
  { id: "23d7f0b4-478e-482a-832a-4b343f846bd3", videoUrl: "https://www.youtube.com/embed/nNmkt57Vq_U", label: "Polo MK5 1.2 TSI" },
  { id: "363db366-7b3c-4eaa-96f8-471fee2bec3a", videoUrl: "https://www.youtube.com/embed/VMyKwjmIXCg", label: "Polo MK5 1.6 TDI" },
  { id: "70044c36-bd57-4755-a82a-61789843cb88", videoUrl: "https://www.youtube.com/embed/tFlwJSLVswg", label: "Polo MK5 1.4 TSI GTI" },

  // ============ Audi Q8 ============
  { id: "497d0505-2eed-425e-a508-b88d960802ef", videoUrl: "https://www.youtube.com/embed/tZr1Qva1LLs", label: "Audi Q8 50 TDI - Šebalj" },
  { id: "39f62953-417b-4fd7-a4e8-802fdcbbbb33", videoUrl: "https://www.youtube.com/embed/tNxD8xy-KBw", label: "Audi Q8 55 TFSI - Neven Novak" },

  // ============ Hyundai Santa Fe ============
  { id: "0137f90f-3d8f-42ee-8836-4b76ebe88897", videoUrl: "https://www.youtube.com/embed/l3J2zlYJ0z8", label: "Santa Fe Hybrid - Jura se fura" },
  { id: "3b8d2627-dc85-4989-80c4-eb97face6b0a", videoUrl: "https://www.youtube.com/embed/lThgZbQ-GZo", label: "Santa Fe 2.2 CRDi - Šebalj" },

  // ============ VW ID.4 ============
  { id: "753d989c-0735-4bfe-91d8-6ba9912488ba", videoUrl: "https://www.youtube.com/embed/9Zw7NiFmIQg", label: "ID.4 Pro - Hairpin recenzija" },
  { id: "6ce8d6a9-15f4-4b6e-a4e6-508c28f94512", videoUrl: "https://www.youtube.com/embed/9Zw7NiFmIQg", label: "ID.4 GTX - Hairpin recenzija" },

  // ============ VW Golf IV ============
  { id: "5df6956c-6b73-4970-b602-f5b25b8bd146", videoUrl: "https://www.youtube.com/embed/k0kVsdJRn-8", label: "Golf IV 1.9 TDI - Ide kao nevrijeme" },

  // ============ VW Golf V ============
  { id: "bb5c3389-cc55-4ad6-90f0-5c57c93f6b07", videoUrl: "https://www.youtube.com/embed/taMSCipuwuY", label: "Golf V 2.0 TDI - recenzija" },
];

async function updateVideoUrls() {
  console.log(`Updating ${videoUpdates.length} variants with video URLs...\n`);
  let success = 0;
  let failed = 0;

  for (const update of videoUpdates) {
    try {
      const result = await db
        .update(carVariants)
        .set({ videoUrl: update.videoUrl })
        .where(eq(carVariants.id, update.id));
      console.log(`✓ ${update.label}`);
      success++;
    } catch (err) {
      console.error(`✗ ${update.label}: ${err}`);
      failed++;
    }
  }

  console.log(`\nDone! ${success} updated, ${failed} failed.`);
  process.exit(0);
}

updateVideoUrls();
