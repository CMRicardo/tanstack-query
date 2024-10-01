import { githubApi } from "../../api";
import { sleep } from "../../helpers";
import { GitHubIssue, State } from "../interfaces";

export const getIssues = async (state: State): Promise<GitHubIssue[]> => {
  await sleep(1500);
  const params = new URLSearchParams();

  if (state !== State.All) {
    params.append("state", state);
  }

  const { data } = await githubApi.get<GitHubIssue[]>("/issues", { params });

  return data;
};
