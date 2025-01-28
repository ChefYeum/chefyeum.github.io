import type { GatsbyNode } from "gatsby"
import yaml from 'js-yaml'
import fs from 'fs'
import { CVContents } from './src/types/CVTypes'
import path from "path"

export const createPages: GatsbyNode["createPages"] = ({ actions }) => {
  const { createPage } = actions
  const cvContents = yaml.load(fs.readFileSync("./CV.yaml", "utf-8")) as CVContents
  
  createPage({
    path: `/cv`,
    component: path.resolve("./src/templates/cvTemplate.tsx"),
    context: {
      cvContents,
    },
  })
}
