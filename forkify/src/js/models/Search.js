import axios from 'axios';

/**
 * Search result model
 */
export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const COR = 'https://cors-anywhere.herokuapp.com/';
    const key = 'e775eef56a89b8292216581a75792889';
    try {
      const res = await axios.get(
        `${COR}http://food2fork.com/api/search`,
        {
          params: {
            key: key,
            q: this.query
          }
        });
      this.result = res.data.recipes;
    } catch (error) {
      this.result = null;
    }
  }
}