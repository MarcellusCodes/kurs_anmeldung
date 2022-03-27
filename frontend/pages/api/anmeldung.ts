// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { GetCourse } from "../../src/queries/index";
import { PostApplyCourse } from "../../src/mutations/index";

interface ResponseProps {
  apply_id: string;
  response: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseProps>
) {
  if (req.method !== "POST") {
    return;
  }

  const { name, vorname, bereich, kostenstelle, kurs_id } = req.body;

  const courseQuery = await GetCourse(kurs_id);

  if (
    courseQuery.data[0].teilnehmer.length ===
    courseQuery.data[0].maximale_teilnehmer
  ) {
    res.status(400).json({ apply_id: "", response: "Der Kurs ist schon voll" });
  }

  const coursePost = await PostApplyCourse(
    name,
    vorname,
    bereich,
    parseInt(kostenstelle),
    kurs_id
  );
  res.status(200).json({
    apply_id: coursePost.data.data.id,
    response: "Erfolgreich Angemeldet",
  });
}
