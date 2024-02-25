import { IProject } from "@/type";
import request, { gql } from "graphql-request";
import { cache } from "react";

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

export const getProjectDetail = cache(async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      project(where: { slug: $slug }) {
        demo
        description
        image {
          url
        }
        slug
        title
        tags {
          name
          slug
        }
        category {
          slug
          name
        }
        content {
          html
        }
        createdAt
      }
    }
  `;
  const result = await request<{ project: IProject }>(graphqlAPI, query, {
    slug,
  });
  return result.project;
});
