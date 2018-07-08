import { GET_LINKS } from './queries';

const addUpdate = (cache, { data }) => {
  const { allLinks } = cache.readQuery({ query: GET_LINKS })
  cache.writeQuery({
    query: GET_LINKS,
    data: { allLinks: allLinks.concat([data.createLink])},
  })
}
const removeUpdate = (cache, { data }) => {
  const { allLinks } = cache.readQuery({ query: GET_LINKS })
  const updatedLinks = allLinks.filter(item => item.id !== data.deleteLink.id);
  cache.writeQuery({
    query: GET_LINKS,
    data: { allLinks: updatedLinks },
  });
}

export {
  addUpdate, removeUpdate
}