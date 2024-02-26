import { IProject, ITags } from "@/type";
import request, { gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_API!;

export const getTags = async () => {
  const query = gql`
    query MyQuery {
      tags {
        name
        slug
      }
    }
  `;
  const result = await request<{ tags: ITags[] }>(graphqlAPI, query);
  return result.tags;
};

export const getTagsDetailed = async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      tag(where: { slug: $slug }) {
        name
        slug
        projects {
          id
          title
          description
          content {
            html
          }
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
    }
  `;
  const result = await request<{
    tag: {
      projects: IProject[];
      description: string;
      slug: string;
      name: string;
    };
  }>(graphqlAPI, query, {
    slug,
  });
  return result;
};
