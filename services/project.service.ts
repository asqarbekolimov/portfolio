import { IProject } from "@/type";
import request, { gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_API!;

export const getProjects = async (language: string) => {
  const query = gql`
    query MyQuery($language: Language) {
      projects(where: { language: $language }) {
        id
        title
        description
        content {
          html
        }
        language
        slug
        demo
        tags {
          name
          slug
        }
        category {
          name
          slug
        }
        image {
          url
        }
      }
    }
  `;
  const { projects } = await request<{ projects: IProject[] }>(
    graphqlAPI,
    query,
    {
      language,
    },
  );

  return projects;
};
