"use server";

import { db } from "../lib/firebase";


export async function deleteProject(profileId: string, projectId: string) {
  if (!profileId || !projectId) throw new Error("IDs obrigatórios");

  try {
    await db
      .collection("profiles")
      .doc(profileId)
      .collection("projects")
      .doc(projectId)
      .delete();

    console.log("Projeto excluído com sucesso!");
  } catch (error) {
    console.error("Erro ao excluir projeto:", error);
    throw new Error("Erro ao excluir projeto");
  }
}
