import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions";
import { GitHubLabel } from "../interfaces";

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    // staleTime: 1000 * 60 * 60, // 1 hour of stale time
    /* placeholderData: [
      {
        id: 791921801,
        node_id: "MDU6TGFiZWw3OTE5MjE4MDE=",
        url: "https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F",
        name: "❤️",
        color: "ffffff",
        default: false,
      } satisfies GitHubLabel,
      {
        id: 588833528,
        node_id: "MDU6TGFiZWw1ODg4MzM1Mjg=",
        url: "https://api.github.com/repos/facebook/react/labels/Difficulty:%20medium",
        name: "Difficulty: medium",
        color: "fbca04",
        default: false,
      } satisfies GitHubLabel,
      {
        id: 710400704,
        node_id: "MDU6TGFiZWw3MTA0MDA3MDQ=",
        url: "https://api.github.com/repos/facebook/react/labels/Component:%20Test%20Renderer",
        name: "Component: Test Renderer",
        color: "006b75",
        default: false,
      } satisfies GitHubLabel,
    ], */
  });

  return { labelsQuery };
};
