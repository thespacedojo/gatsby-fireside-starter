const path = require("path");

exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions
  if (node.internal.type == "items") {
    const slug = slugify(node.title)
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

function slugify(string) {
  const a = 'àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;'
  const b = 'aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with ‘and’
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
      {
        allItems {
          nodes {
            fields {
              slug
            }
          }
        }
      }
    `);
  return Promise.all(
    result.data.allItems.nodes.map(async node => {
      await createPage({
        path: node.fields.slug,
        component: path.resolve("./src/pages/episode.js"),
        context: {
          slug: node.fields.slug
        }
      });
    })
  );
};
