import { ICategory, IProject, ITags } from "@/type";
import request, { gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_API!;

export const getCategories = async () => {
  const query = gql`
    query MyQuery {
      categories {
        name
        slug
      }
    }
  `;
  const result = await request<{ categories: ICategory[] }>(graphqlAPI, query);
  return result.categories;
};

export const getCategoriesDetailed = async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      category(where: { slug: $slug }) {
        name
        description
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
  const { category } = await request<{
    category: {
      projects: IProject[];
      description: string;
      slug: string;
      name: string;
    };
  }>(graphqlAPI, query, {
    slug,
  });
  return { category };
};
