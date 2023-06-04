import { pagesResolver, pageResolver } from './pageResolver'

export default {
  Query: {
    pages: pagesResolver,
    page: pageResolver,
  },
};
