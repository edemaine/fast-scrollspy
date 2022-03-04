type ScrollspyQuery = string | NodeList | (() => ScrollspyQuery);

interface ScrollspyOptions {
  offset?: number;
}

class Scrollspy {
  elements: NodeList;

  constructor(
    public query: ScrollspyQuery,
    public options: ScrollspyOptions
  ) {
    this.updateQuery();
  }

  updateQuery(query?: ScrollspyQuery) {
    if (query)
      this.query = query;
    else
      query = this.query;
    while (typeof query === 'function')
      query = query();
    if (typeof query === 'string')
      query = document.querySelectorAll(query);
    this.elements = query;
    this.onScroll();
  }

  onScroll() {
    // based on menuControl from https://github.com/ederssouza/vanillajs-scrollspy/blob/master/src/index.js
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
    let low = 0, high = this.elements.length - 1;
    // find range of matches
  }
}
