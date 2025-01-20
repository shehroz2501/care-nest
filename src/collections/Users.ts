import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  access: {
    create: () => true,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: "email",
      type: "email",
      required: true,
      unique: true,
    },
    {
      name: "role",
      type: "select",
      options: [
        { label: "Parent", value: "parent" },
        { label: "Provider", value: "provider" },
      ],
      required: true,
    },
  ],
};
