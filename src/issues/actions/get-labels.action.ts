import { githubApi } from "../../api";
import { sleep } from "../../helpers";
import { GitHubLabel } from "../interfaces";

export const getLabels = async (): Promise<GitHubLabel[]> => {
  await sleep(1500);
  // With axios
  const { data } = await githubApi.get<GitHubLabel[]>("/labels");
  console.log(data);

  return data;
};
