import React, {Component} from 'react';

class Main extends Component {

  constructor() {
    super()
    this.state = {
      books: [],
      selectedNav: 'Home'
    }

    this.deleteBook = this.deleteBook.bind(this);
    this.reFetchBooks = this.reFetchBooks.bind(this);
  }

  componentDidMount() {
    // retrieve the books
    fetch('/books', {method: 'GET'})
    .then(rawData => rawData.json())
    .then(data => {
      const toArr = Array.from(data);
      this.setState({books: toArr});
    })
  }

  reFetchBooks() {
    // retrieve the books
    fetch('/books', {method: 'GET'})
    .then(rawData => rawData.json())
    .then(data => {
      const toArr = Array.from(data);
      this.setState({books: toArr});
    })
  }

  deleteBook(id) {
    //fetch api for deleting
    fetch(`/books/${id}`, {method: 'DELETE'})
    .then(() => {
      this.reFetchBooks();
    })
  }

  // navBarUpdate(selection) {
  //   this.setState({selectedNav: selection})
  // }
  addBook(obj) {
    console.log(document.querySelector('form').value);
  }

  render() {
    return (

      <div className='container'>
        <h1> Welcome to my Book Collection </h1>
        <div id='nav'>
          <a href="#" className="btn btn-primary">Home</a>
        </div>
        <div>
          <form role="form">
              <div className="form-group float-label-control">
                  <label for="">Title</label>
                  <input type="text" className="form-control" placeholder=""></input>
              </div>
              <div className="form-group float-label-control">
                  <label for="">Author</label>
                  <input type="text" className="form-control" placeholder=""></input>
              </div>
              <div className="form-group float-label-control">
                  <label for="">Page Count</label>
                  <input type="number" className="form-control" placeholder=""></input>
              </div>
              <div className="form-group float-label-control">
                  <label for="">ImageURL</label>
                  <input type="text" className="form-control" placeholder=""></input>
              </div>
              <a href="#" className="btn btn-primary" onClick={() => this.addBook()} >Add Book</a>
          </form>
        </div>
        <div className="row">
        {this.state.books
            ? this.state.books.map(book => {
              return (
                    <div key={book.id} className="col-sm-4">
                      <div className="card">
                        <img className="card-img-top" src={book.image} alt="Card image cap"></img>
                        <div className="card-body">
                          <h5 className="card-title">{book.title} </h5>
                          <h6 className="card-author">{book.pageCount} pages</h6>
                          <a href="#" className="btn btn-primary" onClick={(e) => {
                            this.deleteBook(book.id);
                          }}>Delete</a>
                        </div>
                      </div>
                    </div>
                 )
              })
            : ''
          }
        </div>
      </div>
    )
  }

}

export default Main;
