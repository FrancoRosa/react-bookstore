import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionCreate } from '../actions/index';

export class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      select: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { tagName, value } = event.target;
    const field = tagName.toLowerCase();
    this.setState({
      [field]: value,
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
      select: '',
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
      <div className="m-1 container">
        <hr />
        <h2 className="m-1">Add new book</h2>
        <div className="form-input m-1">
          <input  className="m-1" placeholder="Book title" type="text" id="title" value={input} onChange={this.handleChange} />
          <select  className="m-1" id="categories" value={select} onChange={this.handleChange}>
            <option value="" disabled selected>Category</option>
            {categories.map(category => <option key={category.objectID}>{category}</option>)}
          </select>
          <button className="m-1" type="button" onClick={this.handleSubmit}>Submit</button>
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
