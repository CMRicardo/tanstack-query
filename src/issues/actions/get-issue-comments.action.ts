import { githubApi } from "../../api";
import { sleep } from "../../helpers";
import { GitHubIssue } from "../interfaces";

export const getIssueComments = async (
  issueNumber: number
): Promise<GitHubIssue[]> => {
  await sleep(1500);
  // With axios
  const { data } = await githubApi.get<GitHubIssue[]>(
    `/issues/${issueNumber}/comments`
  );

  return data;
};
