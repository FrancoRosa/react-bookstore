import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionCreate } from '../actions/index';

export class BooksForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      select: 'Action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  handleSelect(event) {
    this.setState({
      select: event.target.value,
    });
  }

  handleSubmit() {
    const { input, select } = this.state;
    const { submitBook } = this.props;
    const book = {
      title: input,
      category: select,
      id: Math.random(),
    };

    this.setState({
      input: '',
      select: 'Action',
    });

    submitBook(book);
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

    const { input, select } = this.state;
    return (
      <div>
        <h2>BooksForm</h2>
        <div>
          <label htmlFor="title">
            Title:
            <input type="text" id="title" value={input} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="categories">
            Category:
            <select id="categories" value={select} onChange={this.handleSelect}>
              {categories.map(category => <option key={category.objectID}>{category}</option>)}
            </select>
          </label>
        </div>
        <div>
          <button type="button" onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

BooksForm.propTypes = {
  submitBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ books: state });

const mapDispatchToProps = dispatch => ({
  submitBook: book => {
    dispatch(actionCreate(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
