import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "a4ed18c0-481e-4ce9-adfe-dd5345af3ef1", // Get this from tina.io
  token: "5881d057f31b50d6f125576f98b8ac8d20b094be", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "/assets/images",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "_posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
          label: "Date",
          name: "date",
          type: "string",
            ui: {
              component: 'date',
              dateFormat: 'YYYY-MM-DD',
              parse: (value) => value && value.format('YYYY-MM-DD'),
            },
          },
          {
            name: 'draft',
            label: 'Draft',
            type: 'boolean',
            required: true,
            description: 'If this is checked the post will not be published',
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true,
          },

          {
            type: "image",
            name: "featuredImage",
            label: "Featured Image",
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
           {
            type: "string",
            name: "category",
            label: "Category",
          },
        ],
      },
    ],
  },
});
