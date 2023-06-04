const pages = [
  { id: '1', title: 'Foo', content: 'Bar' },
  { id: '2', title: 'Baz', content: 'Bar' },
  { id: '3', title: 'Blah' }
]

export const pagesResolver = () => pages

type ResolverArgs = { id: string }
export const pageResolver = (_: any, args: ResolverArgs) => pages.find(page => page.id === args.id) 
