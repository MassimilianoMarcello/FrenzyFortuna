import { groq } from "next-sanity";
import client from "./sanity.client";
import { Level } from "@/types";

export async function getLevel(): Promise<Level[]> {
  return client.fetch(
    groq`*[_type == "level"]{
      _id,
      title,
      description,
    
      "cards": cards[]->{
        _id,
        value,
        suit,
        probability,
        "imageUrl": image.asset->url,
        description
      }
    }`, // Qui ho aggiunto la parentesi mancante alla fine della query
    {
      next: {
        revalidate: 63,
      },
    }
  );
}


// export async function getProject(slug: string): Promise<Project> {
//   return client.fetch(
//     groq`*[_type == "project" && slug.current == $slug][0]{
      
//     }`,
//     { slug },
//     {
//       next: {
//         revalidate: 63,
//       },
//     }
//   );
// }

