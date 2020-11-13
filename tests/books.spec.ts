import { books } from "../src/utils/data.books"

describe('Books', () => {
    it('should get all books', () => {
     const booksData = books;

     expect(booksData).toHaveLength(books.length);
    })

    it('should get one book id = 2', () => {
        const booksData = books;
        const id = "2";
        const bookFounded = booksData.filter(b => b.id == id);

        expect(bookFounded[0].id).toEqual(id)
    })
  })