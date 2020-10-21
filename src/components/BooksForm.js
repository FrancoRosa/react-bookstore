import React from 'react';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  render() {
    const categories = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];
    return (
      <div>
        <h2>BooksForm</h2>
        <div>
          <label htmlFor="title">
            Title:
            <input type="text" id="title" value={this.state.input} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="categories">
            Category:
            <select id="categories">
              {categories.map(category => <option key={category.objectID}>{category}</option>)}
            </select>
          </label>
        </div>
        <div>
          <button type="button">Submit</button>
        </div>
      </div>
    );
  }
}
export default BooksForm;
