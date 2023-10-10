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
        format: 'md',
        ui: {
        filename: {
          slugify: values => {
            const postDate = values.date ? new Date(values.date) : new Date();
            return `${postDate.toISOString().split("T")[0]}-${(values.title || "")
              .toLowerCase()
              .replace(/ /g, "-")}`.replace(/[^\w\.\/-\s]/gi, "");
          }
        }
      },
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
            type: "datetime",
          },
          {
            type: "string",
            lable: "Category",
            name: "category",
            options: [
              {
                label: "དྲ་བའི་རྨི་ལམ་ཐོལ་བརྒལ་མངོན་འགྱུར།",
                value: "tools",
              },
              {
                label: "དྲ་རྒྱའི་འཇིག་རྟེན་འཇིག་ཉེན་ཀུན་བྲལ།",
                value: "online-space",
              },
            ]
          },
          {
            name: 'draft',
            label: 'Draft',
            type: 'boolean',
            required: false,
            description: 'If this is checked the post will not be published',
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true,
            options: [ 'post']
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
            description: 'Optional',
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          
        ],
      },
    ],
  },

  search: {
    tina: {
      indexerToken: '91568bac22e327114cc3c053b7b98665ace0306b',
      stopwordLanguages: ['eng']
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },
});
